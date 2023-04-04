"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm/${input}`);
  }
  async function randomSearch() {
    setLoadingSearch(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm/${response}`);
    setLoadingSearch(false);
  }
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] px-5 py-3 border border-gray-200 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <HiMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 mt-6 justify-center">
        <button onClick={handleFormSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          disabled={loadingSearch}
          className="btn flex items-center justify-center disabled:opacity-95"
        >
          {loadingSearch ? (
            <img
              src="loadingspinner.svg"
              alt="loading"
              className="h-6 text-center"
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
