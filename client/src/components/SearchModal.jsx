import Grid from "@mui/material/Unstable_Grid2";
import Avagroup from "./Avagroup";
import Logo from "./Logo";
import { Close, Search } from "@mui/icons-material";
import { useState } from "react";
import ButtonRegions from "./ButtonRegions";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const SearchModal = ({ isSearchModalOpen, handleModalClose }) => {
  const [searchByRegionModal, setSearchByRegionModal] = useState(true);
  const [searchDestinations, setSearchDestinations] = useState("");
  const [dayPickerOpen, setDayPickerOpen] = useState(false);
  const onChangeDestinations = (e) => {
    setSearchDestinations(e.target.value);
  };
  const onCloseSearchRegionModal = () => {
    setSearchByRegionModal(false);
  };
  const [range, setRange] = useState(null);
  // onclick outside will on header turn off modal
  let start;
  let end;
  if (range?.from) {
    if (!range.to) {
      // this will only style check in button
      start = <p>{format(range.from, "MMM d")}</p>;
    } else if (range.to) {
      // this will only style check out button
      start = <p>{format(range.from, "MMM d")}</p>;
      end = <p>{format(range.to, "MMM d")}</p>;
    }
  }
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
        {/* WARN: <>@@() &0& #0# =update css here= */}
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
        <div className="flex relative m-auto w-1/2 h-16 bg-gray-100 rounded-full">
          <button className="flex justify-center items-center hover:bg-gray-200 hover:rounded-full flex-grow-[2]">
            <label
              onClick={() => setSearchByRegionModal(true)}
              className="py-3 px-8 my-auto w-full rounded-full rounded-l-full focus-within:bg-white focus-within:shadow-2xl hover:rounded-full focus-within:shadow-gray-500"
            >
              <div className="w-full font-bold text-left">Where</div>
              <input
                className="w-full bg-transparent focus:bg-transparent focus:outline-none"
                autoFocus
                type="text"
                value={searchDestinations}
                onChange={onChangeDestinations}
                placeholder="Search destinations"
              />
            </label>
            {/* <Close /> */}
            {searchByRegionModal && (
              <>
                <div
                  className="fixed inset-0 top-48 bg-transparent z-[103]"
                  onClick={() => {
                    onCloseSearchRegionModal();
                    handleModalClose();
                  }}
                ></div>
                <div className="absolute rounded-2xl p-4 left-0 -bottom-2 translate-y-[100%] bg-white w-[466px] h-[466px] z-[201]">
                  <div className="px-5 my-8 h-auto">
                    <h6 className="mb-5 text-left">Search by region</h6>
                    <ButtonRegions
                      onChangeDestinations={onChangeDestinations}
                    />
                  </div>
                </div>
              </>
            )}
          </button>
          <div
            className="flex flex-row"
            onClick={() => {
              onCloseSearchRegionModal();
              setDayPickerOpen(true);
            }}
          >
            <button className="flex flex-col justify-center p-2 px-8 hover:bg-gray-200 hover:rounded-full focus:bg-white focus:rounded-full focus:shadow-2xl flex-grow-[1] focus:shadow-gray-500">
              <h6 className="whitespace-nowrap">Check in</h6>
              {start ? start : <p className="whitespace-nowrap">Add dates</p>}
            </button>
            <button className="flex flex-col justify-center p-2 px-8 hover:bg-gray-200 hover:rounded-full focus:bg-white focus:rounded-full focus:shadow-2xl flex-grow-[1] focus:shadow-gray-500">
              <h6 className="whitespace-nowrap">Check out</h6>
              {end ? end : <p className="whitespace-nowrap">Add dates</p>}
            </button>
            {dayPickerOpen && (
              <>
                <div className="absolute top-24 z-[104]">
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
          </div>
          <button
            onClick={() => {
              onCloseSearchRegionModal();
            }}
            className="flex flex-row justify-between items-center pr-2 pl-8 w-48 hover:bg-gray-200 hover:rounded-full focus:bg-white focus:rounded-full focus:shadow-2xl flex-grow-[1] focus:shadow-gray-500"
          >
            <div className="text-left">
              <h6>Who</h6>
              <p className="whitespace-nowrap">Add guests</p>
            </div>
            <Grid
              className="flex flex-row justify-center p-2 px-4 font-bold text-white bg-red-500 rounded-full hover:px-2 flex-end"
              container
              direction="row"
              alignItems="center"
            >
              <Search />
              <h5 className="p-1">Search</h5>
            </Grid>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
