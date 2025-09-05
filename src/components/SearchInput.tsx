import { SearchIcon } from "./Icons";

export default function SearchInput() {
  return (
    <form className="flex items-center space-x-2 border p-2 font-poppins">
      <SearchIcon />
      <input
        className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}
