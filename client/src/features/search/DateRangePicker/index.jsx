import DatePicker from "react-datepicker";
import "./DateRangePickerStyle.css";

export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const onHandleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="flex flex-col gap-4 p-8">
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
  );
}
