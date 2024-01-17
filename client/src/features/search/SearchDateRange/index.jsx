import DatePicker from "react-datepicker";
import "./SearchDateRange.css";
import { format } from "date-fns";
export default function SearchDateRange({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isModalDayPick,
  setIsModalDayPick,
}) {
  const onHandleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const stday = startDate ? format(startDate, "MMM dd") : "";
  const enday = endDate ? format(endDate, "MMM dd") : "";

  const content = (
    <div
      className={`${
        isModalDayPick ? "flex" : "hidden"
      } flex-col absolute px-4 -bottom-4 translate-y-[100%] border justify-center w-full bg-white rounded-2xl z-[104]`}
    >
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex p-1.5 m-auto w-80 bg-gray-200 rounded-3xl">
          <button className="flex-grow p-1 bg-white rounded-2xl">Dates</button>
          <button className="flex-grow p-1 rounded-2xl">Months</button>
          <button className="flex-grow p-1 rounded-2xl">Flexible</button>
        </div>
        <div className="flex flex-col">
          <DatePicker
            inline
            monthsShown={2}
            selected={startDate}
            onChange={onHandleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            fixedHeight
            isClearable
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button className="py-2 px-4 whitespace-nowrap bg-gray-50 rounded-full border border-gray-200 hover:border-black focus:border-2">
          Exact dates
        </button>
        <button className="py-2 px-4 whitespace-nowrap bg-gray-50 rounded-full border border-gray-200 hover:border-black focus:border-2">
          +- 1 day
        </button>
        <button className="py-2 px-4 whitespace-nowrap bg-gray-50 rounded-full border border-gray-200 hover:border-black focus:border-2">
          +- 2 days
        </button>
        <button className="py-2 px-4 whitespace-nowrap bg-gray-50 rounded-full border border-gray-200 hover:border-black focus:border-2">
          +- 3 days
        </button>
        <button className="py-2 px-4 whitespace-nowrap bg-gray-50 rounded-full border border-gray-200 hover:border-black focus:border-2">
          +- 7 days
        </button>
      </div>
    </div>
  );
  return (
    <>
      {/* if focus-within then display the addiitonal  */}
      <div className="flex w-full" onFocus={() => setIsModalDayPick(true)}>
        {/* TODO: debug click between label input but component is reloaded. Need to remain the same */}
        <label className="flex flex-col py-4 px-8 bg-gray-100 rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl">
          <b>Check in</b>
          <input
            className="bg-transparent outline-none"
            value={stday}
            type="text"
            placeholder="Add dates"
            readOnly
          />
        </label>
        <label className="flex flex-col py-4 px-8 bg-gray-100 rounded-full cursor-pointer focus-within:bg-white focus-within:border focus-within:border-gray-300 focus-within:shadow-2xl">
          <b>Check out</b>
          <input
            className="bg-transparent outline-none"
            value={enday}
            type="text"
            placeholder="Add dates"
            readOnly
          />
        </label>
      </div>
      {content}
    </>
  );
}
