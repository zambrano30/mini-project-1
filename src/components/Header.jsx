import { SearchBar } from "./SearchBar";

export function Header({ onSearch, locations }) {
  return (
    <header className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start px-4 py-6 mx-2">
      <div className="w-full flex justify-start md:w-auto">
        <img src="/logo.svg" alt="Logo" className="w-32 md:w-40" />
      </div>
      <div className="w-full flex justify-center mt-4 md:mt-0 md:w-2/3">
        <SearchBar onSearch={onSearch} locations={locations} />
      </div>
    </header>
  );
}
