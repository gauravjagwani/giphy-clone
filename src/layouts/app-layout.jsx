import React from "react";
import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const AppLayout = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Heading />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
