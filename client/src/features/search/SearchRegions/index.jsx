import { Place } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const database = [
  {
    id: "1",
    name: "I'am flexible",
    imgRegion:
      "data:image/png;base64,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",
  },
  {
    id: "2",
    name: "Europe",
    imgRegion:
      "https://static.vecteezy.com/system/resources/previews/024/887/977/original/political-blank-map-of-europe-in-gray-color-with-white-background-illustration-vector.jpg",
  },
  {
    id: "3",
    name: "South Korea",
    imgRegion:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNy_oy5wQkF8rmjFziK0nWksFQUBVAY5V-lgiYZNEQ14ZZJBWckzndLUJPuHFwQC4ujM&usqp=CAU",
  },
  {
    id: "4",
    name: "Australia",
    imgRegion:
      "data:image/png;base64,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",
  },
  {
    id: "5",
    name: "Thailand",
    imgRegion:
      "data:image/png;base64,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",
  },
  {
    id: "6",
    name: "United States",
    imgRegion:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_7QbdF1lE25TRXEmiTGXOy5qj3oYAjYuQVyXcYFgLSGT5rgiZZuJemVnKo8gX7Xy6rs&usqp=CAU",
  },
];
const SearchRegions = ({ isModalGeo }) => {
  // NEXT: <next onChangeDestination>@@() &0& #0# =how to click button and record value to input =
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);
  const [showRegion, setShowRegion] = useState(true);
  const [selectedOption, setSelectedOption] = useState(0);
  const handleFocus = () => {
    setSelectedOption(0);
  };
  const handleChange = (e) => {
    setSelectedOption(0);
    setInput(e.target.value);
  };
  // build this to become helper functions
  const handleKeyDown = (e) => {
    // When keydown
    // init selected option = 0
    // plus or minus selected option value coresponding with database.length - 1
    // if input is empty then start from index 0
    // if input is not empty then run match with, if not match then show No matched region found.
    // if input is not empty then run match with, if match then show matched region
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedOption((prev) => (prev > 0 ? prev - 1 : database.length - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedOption((prev) => (prev < database.length - 1 ? prev + 1 : 0));
    }
  };
  useEffect(() => {
    if (selectedOption !== 0) {
      setInput(database[selectedOption].name);
    }
    if (input === "") {
      setDisplay(false);
      setShowRegion(true);
    } else {
      setDisplay(true);
      setShowRegion(false);
    }
  }, [input, selectedOption]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const contentOptions = database.reduce((accumulatorrep, region, index) => {
    const isSelected = index === selectedOption;
    if (region.name.toLowerCase().startsWith(input.toLowerCase())) {
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
      <label
        onFocus={handleFocus}
        onBlur={() => {
          setShowRegion(false);
          setDisplay(false);
        }}
        className="flex flex-col py-4 px-8 mt-1 bg-gray-100 rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl focus-within:scale-105 focus-within:shadow-gray-300"
      >
        Where
        <input
          type="text"
          className="bg-transparent outline-none"
          value={input}
          onChange={handleChange}
          placeholder="Search destinations"
          autoFocus
        />
      </label>
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
