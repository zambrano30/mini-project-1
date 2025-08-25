import React from "react";

export function Card({ stay }) {
  if (!stay) return null;
  return (
    <section
      key={stay.title}
      className="p-4 max-w-full w-full md:w-full transition-transform duration-200 hover:scale-105 flex flex-col  "
    >
      <img
        src={stay.photo}
        alt={stay.title}
        className="w-full h-[250px] md:h-[300px] lg:h-96 object-cover rounded-2xl"
      />
      <div className="flex justify-between items-center mb-2 mt-4">
        {stay.superHost ? (
          <>
            <div className="flex items-center gap-2">
              <span className="border border-black rounded-xl px-2 py-1 text-xs font-bold bg-gray-100">SUPER HOST</span>
              <span className="text-gray-500 text-xs font-medium">{stay.type}. </span>
              {stay.beds !== null && (
                <span className="text-gray-600 text-xs rounded py-1">{stay.beds} beds</span>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-xs font-medium">{stay.type}. </span>
            {stay.beds !== null && (
              <span className="text-gray-600 text-xs rounded py-1">{stay.beds} beds</span>
            )}
          </div>
        )}
        <span className="flex items-center text-xs font-semibold ml-2">
          <svg className="w-4 h-4 text-red-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
          </svg>
          {stay.rating}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-1 text-gray-800 truncate">{stay.title}</h3>
    </section>
  );
}
