import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Category from "./pages/Category";
import Search from "./pages/Search";
import SingleGIF from "./pages/SingleGIF";
import Favorites from "./pages/Favourites";
import Home from "./pages/Home";
import GifProvider from "./context/gif-context";
// import Favorites from "./pages/Favourites";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:category", element: <Category /> },
      { path: "/search/:query", element: <Search /> },
      { path: "/:type/:slug", element: <SingleGIF /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <GifProvider>
      <RouterProvider router={router}>
        <div className="text-pink-400">Helo</div>
      </RouterProvider>
    </GifProvider>
  );
}

export default App;
