import React, { useState } from "react";
import { useStays } from "../hooks/useStays";
import { useGuestCounter } from "../hooks/useGuestCounter";
import { Modal } from "./Modal";
// ...existing code...
export function SearchBar({ onSearch, locations }) {
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const {
    adults,
    children,
    incrementAdults,
    decrementAdults,
    incrementChildren,
    decrementChildren,
  } = useGuestCounter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch({ location, guests: adults + children });
    setModalOpen(false);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleFocus = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  const svgSearch = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );

  return (
    <>
      <form className="flex flex-row justify-center items-center w-full mx-auto mt-10 md:mt-2">
        <div className="relative w-1/3 min-w-[120px]">
          <input
            type="text"
            placeholder="Add location"
            className="border border-gray-200 rounded-l-2xl h-14 px-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={location}
            onChange={handleLocationChange}
            onFocus={handleFocus}
            autoComplete="off"
          />
          {showSuggestions && (
            <ul className="absolute left-0 top-full w-full bg-white border border-gray-200 rounded-b-xl shadow-lg z-10 max-h-40 overflow-y-auto">
              {locations
                .filter((loc) =>
                  loc.toLowerCase().includes(location.toLowerCase())
                )
                .map((loc) => (
                  <li
                    key={loc}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setLocation(loc);
                      setShowSuggestions(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              {locations.filter((loc) =>
                loc.toLowerCase().includes(location.toLowerCase())
              ).length === 0 && (
                <li className="px-4 py-2 text-gray-400">No results</li>
              )}
            </ul>
          )}
        </div>
        <input
          type="text"
          placeholder="Add Guest"
          className="border-t border-b border-gray-200 h-14 px-4 w-1/3 min-w-[120px] focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-none"
          value={
            adults + children > 0
              ? `${adults + children} guest${adults + children > 1 ? "s" : ""}`
              : "Add Guest"
          }
          readOnly
          onFocus={handleFocus}
        />
        <button
          type="button"
          className="text-orange-600 border border-gray-200  border-l-gray-300 rounded-r-2xl h-14 px-6 min-w-[60px] flex items-center justify-center hover:bg-orange-50 transition"
          onClick={handleSearch}
        >
          {svgSearch}
        </button>
      </form>
      <Modal open={modalOpen} onClose={handleClose}>
        <button
          className="absolute right-4 top-4 text-gray-500"
          onClick={handleClose}
        >
          ✕
        </button>
        <form className="flex flex-col items-center mt-10 w-full gap-4" onSubmit={handleSearch}>
          <div className="flex justify-center items-center w-full">
            <div className="relative w-35">
              <input
                type="text"
                placeholder="Add location"
                className="border border-gray-200 rounded-l-2xl h-20 px-4 w-30"
                value={location}
                onChange={handleLocationChange}
                autoFocus
                autoComplete="off"
              />
              {showSuggestions && (
                <ul className="absolute left-0 top-full w-full bg-white border border-gray-200 rounded-b-xl shadow-lg z-10 max-h-40 overflow-y-auto">
                  {locations
                    .filter((loc) =>
                      loc.toLowerCase().includes(location.toLowerCase())
                    )
                    .map((loc) => (
                      <li
                        key={loc}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setLocation(loc);
                          setShowSuggestions(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  {locations.filter((loc) =>
                    loc.toLowerCase().includes(location.toLowerCase())
                  ).length === 0 && (
                    <li className="px-4 py-2 text-gray-400">No results</li>
                  )}
                </ul>
              )}
            </div>
            <input
              type="text"
              placeholder="Add Guest"
              className="border border-gray-200 h-20 px-4 w-40"
              value={
                adults + children > 0
                  ? `${adults + children} guest${adults + children > 1 ? "s" : ""}`
                  : "Add Guest"
              }
              readOnly
            />
            <button
              type="submit"
              className="text-orange-600 border border-gray-200 rounded-r-2xl h-20 px-4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
            <div className="flex flex-col items-start">
              <span className="font-semibold">Adults</span>
              <span className="text-xs text-gray-500 mb-1">
                Ages 13 or above
              </span>
              <div className="flex gap-2 items-center mt-1">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={decrementAdults}
                >
                  -
                </button>
                <span className="px-3">{adults}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={incrementAdults}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">Children</span>
              <span className="text-xs text-gray-500 mb-1">Ages 2-12</span>
              <div className="flex gap-2 items-center mt-1">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={decrementChildren}
                >
                  -
                </button>
                <span className="px-3">{children}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={incrementChildren}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
