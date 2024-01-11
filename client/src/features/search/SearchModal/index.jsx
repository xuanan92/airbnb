import { useState } from "react";
import SearchHeader from "./SearchHeader";
import SearchForm from "./SearchForm";
import BlackModal from "./BlackModal";

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
      <SearchForm
        handleGeoModal={handleGeoModal}
        isSearchModal={isSearchModal}
      />
      <BlackModal handleSearchModal={handleSearchModal} />
      {/* region location */}
    </>
  );
};

export default SearchModal;
