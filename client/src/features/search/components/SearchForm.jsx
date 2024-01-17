import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import SelectRegions from "../SearchRegions";
import { useState } from "react";
<<<<<<< HEAD:client/src/features/search/SearchModal/SearchForm/index.jsx
import SearchRegions from "./SearchRegions";
import SearchDateRange from "./SearchDateRange";
import FormInputs from "./FormInputs";
=======
import SearchDateRange from "../SearchDateRange";
>>>>>>> parent of 5b0614b (update search feature new structure):client/src/features/search/components/SearchForm.jsx

const SearchForm = ({ isModalGeo, handleGeoModal }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalDayPick, setIsModalDayPick] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const onChangeRegions = (e) => {
    setSearchLocation(e.target.value);
  };
  return (
    <div className="flex fixed left-0 top-24 flex-col w-full h-24 bg-white z-[100]">
      <FormInputs />
      <form className="flex relative items-center m-auto bg-gray-100 rounded-full w-[848px]">
        {/* component search geo button */}
        <SelectRegions onChangeRegions={onChangeRegions} />

        {/* <Date range pick/> */}
        <SearchDateRange
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          isModalDayPick={isModalDayPick}
          setIsModalDayPick={setIsModalDayPick}
        />

        {/* value for other people */}
        <div
          onFocus={() => handleGeoModal(true)}
          className="flex flex-row justify-between items-center pr-2 pl-8 mt-1 bg-gray-100 focus-within:bg-white focus-within:rounded-full focus-within:shadow-2xl hover:bg-gray-200 hover:rounded-full focus:bg-white focus:rounded-full focus-within:shadow-gray-500 hover:focus-within:bg-white"
        >
          <label className="w-40 text-left hover:cursor-pointer">
            <h6>Who</h6>
            <input
              type="text"
              className="bg-transparent hover:cursor-pointer focus:outline-none"
              value={numberOfGuests}
              placeholder="Add guests"
              readOnly
            />
          </label>
          <Grid
            className="flex flex-row justify-center p-2 px-4 w-32 font-bold text-white bg-red-500 rounded-full hover:px-2"
            container
            direction="row"
            alignItems="center"
          >
            <Search />
            <h5 className="p-1">Search</h5>
          </Grid>
        </div>
      </form>
      <div></div>
      {/* display part is here */}
    </div>
  );
};
export default SearchForm;
