"use client";

import Image from "next/image";
import useSWR from "swr";
import fetchImages from "@/lib/fetchImages";

type ImageType = {
  name: string;
  url: string;
};

function Images() {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR("images", fetchImages, {
    revalidateOnFocus: false,
  });

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
        {images?.imageUrls?.map((image: ImageType, index: number) => (
          <div
            key={image.name}
            className={`relative cursor-help  ${
              index === 0 && "md:col-span-2 md:row-span-2"
            } hover:scale-[103%] transition-transform duration-200 ease-in-out`}
          >
            <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
              <p className="text-center font-light text-lg p-5">
                {/* Remove timestamp and extension from image name */}
                {image.name.split("_").shift()?.toString().split(".").shift()}
              </p>
            </div>
            <Image
              src={image.url}
              alt={image.name}
              width={800}
              height={800}
              className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
