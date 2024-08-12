import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-[url('./src/assets/space_bg.gif')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Add overlay for better contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight text-center sm:text-7xl drop-shadow-lg">
          Welcome to Creatorverse
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-center max-w-lg mx-auto drop-shadow-md">
          Discover, showcase, and connect with creators from all over the
          universe. Your creative journey starts here.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/show-creators"
            className="inline-block rounded-full bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Creators
          </Link>
          <Link
            to="/add-creator"
            className="inline-block text-lg font-semibold leading-6 text-gray-200 transition-transform transform hover:scale-105"
          >
            Add a Creator <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
