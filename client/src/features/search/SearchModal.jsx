import { Search } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Avagroup from "./Avagroup";
import Logo from "./Logo";
import SelectRegions from "./SelectRegions";

const SearchModal = ({ isSearchModalOpen, handleModalClose }) => {
  const [isModalGeoOpen, setIsModalGeoOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [checkInToggle, setCheckInToggle] = useState(false);
  const [checkOutToggle, setCheckOutToggle] = useState(false);
  const [isModalDayPickOpen, setIsModalDayPickOpen] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [range, setRange] = useState(null);
  const onChangeRegions = (e) => {
    setSearchLocation(e.target.value);
  };
  const onCloseSearchRegionModal = () => {
    setIsModalGeoOpen(false);
  };
  // onclick outside will on header turn off modal
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-all z-[99]"
        onClick={handleModalClose}
      ></div>
      <div
        onClick={onCloseSearchRegionModal}
        className="grid fixed top-0 left-0 grid-cols-3 px-16 w-full h-24 bg-white z-[105] z-60 shadow-gray-200"
      >
        <Logo />
        {/* NEXT: <>@@() &0& #0# =update css here= */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <div
            className={`${
              isSearchModalOpen ? "scale-0" : "top-8 scale-100"
            } flex animation-appear p-2 gap-6 focus:underline focus:underline-offset-8 focus:decoration-black decoration-2`}
          >
            <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
              Stays
            </button>
            <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
              Experiences
            </button>
            <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
              Online Experiences
            </button>
          </div>
        </div>
        <Avagroup />
      </div>

      <div className="fixed left-0 top-24 w-full h-24 bg-white z-[100]">
        <form className="flex relative m-auto w-1/2 h-16 bg-gray-100 rounded-full">
          <label
            onFocus={() => setIsModalGeoOpen(true)}
            onBlur={() => setIsModalGeoOpen(false)}
            className="py-3 px-8 my-auto w-full rounded-full rounded-l-full focus-within:bg-white focus-within:shadow-2xl hover:rounded-full hover:cursor-pointer focus-within:shadow-gray-500"
          >
            <h6 className="w-full font-bold text-left">Where</h6>
            <input
              className="w-full bg-transparent hover:cursor-pointer focus:bg-transparent focus:outline-none"
              autoFocus
              type="text"
              value={searchLocation}
              onChange={onChangeRegions}
              placeholder="Search destinations"
            />
          </label>
          {/* <Close /> */}
          <div
            className="flex items-center"
            onFocus={() => setIsModalDayPickOpen(true)}
          >
            <label
              onClick={() => setCheckInToggle(!checkInToggle)}
              className={`${
                range?.from && !range?.to
                  ? "bg-white rounded-full shadow-2xl shadow-black"
                  : ""
              }
flex flex-col justify-center p-2 px-8 focus-within:bg-white focus-within:rounded-full focus-within:shadow-2xl hover:bg-gray-200 hover:rounded-full hover:cursor-pointer focus-within:shadow-gray-500 hover:focus-within:bg-white`}
            >
              <h6 className="whitespace-nowrap">Check in</h6>
              <input
                type="text"
                className="bg-transparent hover:cursor-pointer focus:outline-none"
                value={range?.from && format(range?.from, "MMM dd")}
                readOnly
                placeholder="Add dates"
              />
            </label>
            <label
              onClick={() => setCheckOutToggle(!checkOutToggle)}
              className={`${
                range?.to ? "bg-white rounded-full shadow-black shadow-2xl" : ""
              } flex flex-col justify-center p-2 px-8 focus-within:bg-white focus-within:rounded-full focus-within:shadow-2xl hover:bg-gray-200 hover:rounded-full hover:cursor-pointer focus-within:shadow-gray-500 hover:focus-within:bg-white`}
            >
              <h6 className="whitespace-nowrap">Check out</h6>
              <input
                type="text"
                className="bg-transparent hover:cursor-pointer focus:outline-none"
                value={range?.to ? format(range?.to, "MMM dd") : ""}
                readOnly
                placeholder="Add dates"
              />
            </label>
          </div>
          <div
            onFocus={() => {
              onCloseSearchRegionModal();
            }}
            className="flex flex-row justify-between items-center pr-2 pl-8 focus-within:bg-white focus-within:rounded-full focus-within:shadow-2xl hover:bg-gray-200 hover:rounded-full focus:bg-white focus:rounded-full focus-within:shadow-gray-500 hover:focus-within:bg-white"
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
          {isModalGeoOpen && (
            <SelectRegions onChangeRegions={onChangeRegions} />
          )}
          {isModalDayPickOpen && (
            <>
              <div className="flex absolute -bottom-4 translate-y-[100%] border justify-center w-full bg-white rounded-2xl z-[104]">
                <DayPicker
                  mode="range"
                  numberOfMonths={2}
                  selected={range}
                  defaultMonth={new Date()}
                  disabled={new Date(1900, 0, 1)}
                  onSelect={setRange}
                  pagedNavigation
                  showOutsideDays
                  fixedWeeks
                />
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchModal;
