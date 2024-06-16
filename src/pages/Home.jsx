import React, { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState();
  const fetchTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };
  console.log(gifs);

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);
  return (
    <div>
      <img
        src="banner.gif"
        alt="earth-banner"
        className="mt-2 rounded-md w-full"
      />
      <FilterGif showTrending />
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5">
        {gifs?.map((gif) => {
          return <Gif gif={gif} key={gif?.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
