import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./styleCalendar.css";

const ModalCalendar = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const onHandleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="flex-col justify-center px-4 mt-4 w-full bg-white rounded-2xl border">
      <div className="flex flex-col gap-4 pt-8">
        <div className="flex p-2 m-auto w-80 bg-gray-200 rounded-3xl">
          <button className="flex-grow p-1 bg-white rounded-2xl">Dates</button>
          <button className="flex-grow p-1 rounded-2xl">Months</button>
          <button className="flex-grow p-1 rounded-2xl">Flexible</button>
        </div>
        <div className="flex flex-col">
          <ReactDatePicker
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
      <div className="flex gap-4 pb-4">
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
};

export default ModalCalendar;
