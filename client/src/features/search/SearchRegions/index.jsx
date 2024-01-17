import { Place } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const SearchRegions = ({ isModalGeo }) => {
  // NEXT: <next onChangeDestination>@@() &0& #0# =how to click button and record value to input =
  const [display, setDisplay] = useState(false);
  const [showRegion, setShowRegion] = useState(true);
  // build this to become helper functions
  const contentOptions = database.reduce((accumulatorrep, region, index) => {
    const isSelected = index === selectedOption;
    if (region.name.toLowerCase().startsWith(inputRegion.toLowerCase())) {
      accumulatorrep.push(
        <Grid
          containter
          direction="row"
          alignItems="center"
          key={region.id}
          className={`${isSelected ? "bg-white-200" : ""} flex gap-4 p-2 ml-4`}
        >
          <div className="p-2 bg-gray-100 rounded-2xl">
            <Place fontSize="large" />
          </div>
          <p>{region.name}</p>
        </Grid>,
      );
    }
    return accumulatorrep;
  }, []);
  const contentRegions = database.reduce((accumulator, region) => {
    if (region.name) {
      accumulator.push(
        <div key={region.id} className="flex flex-col gap-4 p-2 ml-4">
          <img
            className="object-cover object-center gap-4 w-full rounded-lg border border-gray-300 aspect-square"
            src={region.imgRegion}
            alt="image"
            width="400px"
            height="400px"
          />
          <p>{region.name}</p>
        </div>,
      );
    }
    return accumulator;
  }, []);

  return (
    <>
      {/* list of database content */}
      <div
        className={`${
          display ? "" : "hidden"
        } overflow-auto border border-gray-300 left-0 absolute rounded-2xl bg-white text-black w-96 h-auto max-h-[300px] -bottom-2 translate-y-[100%]`}
      >
        {contentOptions}
      </div>
      {showRegion && (
        <div className="flex rounded-2xl bg-white border border-gray-200 absolute left-0 -bottom-2 p-4 translate-y-[100%] w-[600px] flex-col">
          <h6>Search by region</h6>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {contentRegions}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchRegions;
