"use client";

import { FormEvent, MouseEvent, useState } from "react";

function PromptInput() {
  const [input, setInput] = useState("");

  async function submitPrompt() {
    const prompt = input.trim();
    if (!prompt) return;

    alert("your prompt was " + prompt);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitPrompt();
  };

  return (
    <div className="m-10">
      <form
        className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border border-white rounded-md lg:divide-x"
        onSubmit={handleSubmit}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-4 outline-none resize-none"
          placeholder="Enter a prompt..."
        />
        <button
          type="submit"
          className={`p-4 ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-500 cursor-not-allowed "
          }`}
          disabled={!input}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md lg:rounded-bl-none font-bold"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
