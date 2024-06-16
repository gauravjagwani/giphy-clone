import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Category = () => {
  const [results, setResults] = useState([]);
  const { gf, filter } = GifState();
  const { category } = useParams();

  const getCategory = async () => {
    const { data } = await gf.gifs(category, category);
    setResults(data);
  };
  useEffect(() => {
    getCategory();
  }, [category, filter]);
  return (
    <div className="my-3">
      <h2 className="text-5xl text-white font-extrabold pb-3 capitalize">
        {category}
      </h2>
      <FilterGif alignLeft={true} />
      <div className="columns-2 md:column-3 lg:columns-4 gap-2">
        {results?.map((gif) => {
          return <Gif key={gif?.id} gif={gif} />;
        })}
      </div>
    </div>
  );
};

export default Category;
