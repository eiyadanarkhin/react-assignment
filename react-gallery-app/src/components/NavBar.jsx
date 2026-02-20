import React, { useState } from "react";

export default function NavBar() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className=" bg-gray-50 flex px-46 py-5  justify-between items-end">
      <div>
        <p className="text-gray-500 text-sm">Whats new?</p>
        <h2 className="text-2xl font-bold text-blue-900">
          Take A Look At Some Of Our Pets
        </h2>
      </div>
      <button
        onClick={() => setViewMore(!viewMore)}
        className="flex leading-tight border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-900 hover:text-white transition"
      >
        {viewMore ? "ViewLess" : "ViewMore"}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
            stroke="#003459"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
