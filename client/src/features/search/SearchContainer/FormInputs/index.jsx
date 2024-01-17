import { Search } from "@mui/icons-material";
import { format } from "date-fns";

const FormInputs = ({
  inputArea,
  setInputArea,
  setSwitchFocus,
  startDate,
  endDate,
}) => {
  const startDateConverted = startDate
    ? format(startDate, "MMM dd")
    : "Add date";
  const endDateConverted = endDate ? format(endDate, "MMM dd") : "Add date";
  return (
    <form className="flex relative items-center m-auto w-full bg-white rounded-full border shadow-lg focus-within:bg-gray-100 text-[12px] group">
      <label
        onFocus={() => setSwitchFocus("Regions")}
        className="flex flex-col py-2 px-6 text-left bg-transparent rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl focus-within:scale-105 hover:bg-gray-300 basis-1/3 focus-within:shadow-gray-300 focus-within:hover:bg-white"
      >
        <b>Where</b>
        {/* done: add function to update value of user input */}
        {/* wait: adding fetch data from server to list data out so that it can be matched to user input */}
        {/* wait: add function to filter data given match location to user input */}
        {/* done: when typing onChange function call modal Locations */}
        {/* done: when focus function call modal Regions */}
        <input
          type="text"
          className="bg-transparent outline-none"
          placeholder="Search destinations"
          value={inputArea}
          onChange={(e) => setInputArea(e.target.value)}
          onFocus={() => setSwitchFocus("Regions")}
          autoFocus
        />
      </label>
      <div
        className="flex flex-row basis-1/3"
        onFocus={() => setSwitchFocus("Calendar")}
      >
        {/* done: add css for hovering background color */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col py-2 px-6 text-left bg-transparent rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl focus-within:scale-105 hover:bg-gray-300 basis-1/2 focus-within:shadow-gray-300 focus-within:hover:bg-white"
        >
          <b>Check in</b>
          {/* done: add function update value from datepicker to input replace add date */}
          <input
            className="bg-transparent cursor-pointer outline-none w-[80px]"
            type="text"
            placeholder="Add dates"
            value={startDateConverted}
            readOnly
          />
        </button>
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col py-2 px-6 text-left bg-transparent rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl focus-within:scale-105 hover:bg-gray-300 basis-1/2 focus-within:hover:bg-white focus-within:shadow-gray-300"
        >
          <b>Check out</b>
          <input
            className="bg-transparent cursor-pointer outline-none w-[80px]"
            type="text"
            placeholder="Add dates"
            value={endDateConverted}
            readOnly
          />
        </button>
      </div>
      <button
        onFocus={() => setSwitchFocus("Guests")}
        onClick={(e) => e.preventDefault()}
        className="flex flex-row bg-transparent rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl focus-within:scale-105 hover:bg-gray-300 basis-1/3 focus-within:hover:bg-white focus-within:shadow-gray-300"
      >
        <label className="flex flex-col flex-auto py-2 px-6 text-left peer basis-1/2">
          <b>Who</b>
          {/* Next: code function update value guest from expanded form to input  */}
          <input
            className="bg-transparent cursor-pointer outline-none w-[80px]"
            type="text"
            placeholder="Add guests"
            readOnly
          />
        </label>
        <button
          // some: adding function to submit form
          // some: form only update when there is any data of it, so need to check not empty input then send data
          type="button"
          onClick={() => {}}
          className="flex items-center p-2 m-2 my-auto w-10 h-10 text-white bg-red-600 rounded-full duration-200 ease-in-out transform-cpu group-focus-within:w-20"
        >
          <Search />
          <p className="hidden group-focus-within:transition-all group-focus-within:inline-block">
            Search
          </p>
        </button>
      </button>
    </form>
  );
};

export default FormInputs;
