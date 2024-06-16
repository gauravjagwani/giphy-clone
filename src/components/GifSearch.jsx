import React, { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchGIFs = () => {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);
  };
  // console.log(query);
  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full text-xl pl-4 py-3 pr-14 text-black rounded-sm border border-gray-300 outline-none"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-20 rounded-full opacity-80 top-4 bg-gray-300 "
        >
          <HiMiniXMark size={22} />
        </button>
      )}
      <button
        onClick={searchGIFs}
        className="bg-gradient-to-tr from-pink-600 to-orange-600 text-white px-4 py-2 rounded-sm"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
