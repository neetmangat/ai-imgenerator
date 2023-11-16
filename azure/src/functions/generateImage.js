const { app } = require("@azure/functions");
const openai = require("../../lib/openai");
const axios = require("axios");
const generateSASToken = require("../../lib/generateSASToken");

const { BlobServiceClient } = require("@azure/storage-blob");
const accountName = process.env.accountName;
const containerName = "images";

app.http("generateImage", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    // Get User's prompt from the request
    const { prompt } = await request.json();
    console.log(`Prompt is ${prompt}`);

    // Create Image using DALLE API
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;

    // Download the image and return it as an array buffer
    const res = await axios.get(image_url, {
      responseType: "arraybuffer",
    });
    const arrayBuffer = res.data;

    // Establish connection with Azure Blob Storage
    sasToken = await generateSASToken();
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const timestamp = new Date().getTime();
    const file_name = `${prompt}_${timestamp}.png`;
    const blockBlobClient = containerClient.getBlockBlobClient(file_name);

    // Upload Image data to the Blob
    try {
      await blockBlobClient.uploadData(arrayBuffer);
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  },
});
