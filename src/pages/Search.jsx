import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import FilterGif from "../components/FilterGif";
import Gif from "../components/Gif";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { gf, filter } = GifState();
  const { query } = useParams();

  const fetchSearchResults = async () => {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    // console.log(data);
    setSearchResults(data);
  };
  console.log("Search resuls", searchResults);
  useEffect(() => {
    fetchSearchResults();
  }, [filter]);
  return (
    <div className="my-3">
      <h2 className="text-5xl text-white font-extrabold pb-3 capitalize">
        {query}
      </h2>
      <FilterGif alignLeft={true} />

      {searchResults.length > 0 ? (
        <div className="columns-2 md:column-3 lg:columns-4 gap-2">
          {searchResults?.map((gif) => {
            return <Gif gif={gif} key={gif?.id} />;
          })}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try Searching for Stickers instead ?
        </span>
      )}
    </div>
  );
};

export default Search;
