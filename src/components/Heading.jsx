import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { GifState } from "../context/gif-context";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import GifSearch from "./GifSearch";

const Heading = () => {
  const [categories, setCategories] = useState([]);
  const [showcategories, setShowCategories] = useState(false);
  const { gf, gifs, setGifs, filter, setFilter, favorites, addToFavorites } =
    GifState();
  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
    // console.log(categories);
  };
  useEffect(() => {
    fetchGifCategories();
    // console.log(categories);
  }, []);
  return (
    <nav>
      <div className="relative flex gap-3 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="giphy-logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>
        {/* render categories */}
        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category?.gif?.id}
                to={`/${category?.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block "
              >
                {category?.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showcategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showcategories ? "gradient" : ""
              } border-b-4 hidden lg:block `}
            />
          </button>
          {favorites.length > 0 && (
            <div className="bg-gray-800 py-2.5 px-3 rounded-lg hover:bg-gray-700 cursor-pointer">
              <Link to="favorites"> Favorites GIFs</Link>
            </div>
          )}
          <button onClick={() => setShowCategories(!showcategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-700 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        {showcategories && (
          <div className="absolute right-0 top-14 w-full gradient pt-6 px-10 pb-9 z-20">
            <span className="font-bold text-2xl"> Categories</span>
            <hr className="my-4 bg-gray-100 opacity-25" />
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
              {categories?.map((category) => (
                <Link
                  onClick={() => setShowCategories(false)}
                  key={category?.gif?.id}
                  to={`/${category?.name_encoded}`}
                  className="font-bold transition ease-in-out"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <GifSearch filter={filter} setFilter={setFilter} />
    </nav>
  );
};

export default Heading;
