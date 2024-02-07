import { useState } from "react";
import SearchModal from "../../features/search/SearchModal";
import Logo from "../Logo";

const SearchGroup = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const handleSearchModal = () => {
    setIsSearchModal(!isSearchModal);
  };
  return (
    <>
      <section
        className="flex justify-center items-center cursor-pointer"
        onClick={handleSearchModal}
      >
        <ul className="flex gap-2 justify-between items-center p-2 px-8 rounded-full border shadow-sm text-md shadow-gray-400 hover:shadow-gray-500">
          <li className="text-black font-regular">Anywhere</li>
          <div className="">|</div>
          <li className="text-black font-regular">Any week</li>
          <div className="">|</div>
          <li className="">Add guests</li>
          <figure className="p-1 bg-red-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 font-bold text-white"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </figure>
        </ul>
      </section>
      {isSearchModal && (
        <SearchModal
          handleSearchModal={handleSearchModal}
          isSearchModal={isSearchModal}
        />
      )}
    </>
  );
};

export default SearchGroup;
