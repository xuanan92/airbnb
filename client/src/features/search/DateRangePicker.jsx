import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";

export default function DateRangePicker({ setIsModalDayPickOpen, ref }) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    ref.current = date;
  }, [date]);
  return (
    <div
      onBlur={() => setIsModalDayPickOpen(false)}
      className="flex absolute -bottom-4 translate-y-[100%] border justify-center w-full bg-white rounded-2xl z-[104]"
    >
      <DayPicker
        mode="range"
        numberOfMonths={2}
        selected={date}
        defaultMonth={new Date()}
        disabled={new Date(1900, 0, 1)}
        onSelect={setDate}
        pagedNavigation
        showOutsideDays
        fixedWeeks
      />
    </div>
  );
}
