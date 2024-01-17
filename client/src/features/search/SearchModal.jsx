import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import SearchContainer from "./SearchContainer";
import BlackModal from "./components/BlackModal";
const SearchModal = ({ isSearchModal, handleSearchModal }) => {
  const [isModalGeo, setIsModalGeo] = useState(false);
  const handleGeoModal = () => {
    setIsModalGeo(true);
  };
  // onclick outside will on header turn off modal

  return (
    <>
      {/* header group  */}
      <SearchHeader
        handleGeoModal={handleGeoModal}
        isSearchModal={isSearchModal}
      />
      <SearchContainer
        handleGeoModal={handleGeoModal}
        isSearchModal={isSearchModal}
      />
      <BlackModal handleSearchModal={handleSearchModal} />
      {/* region location */}
    </>
  );
};

export default SearchModal;
