import { useState } from "react";
import ExpandedFormInputs from "./ExpandedFormInputs";
import FormInputs from "./FormInputs";

const SearchContainer = () => {
  //note: listing state and props then define which are states, then define which belongs to which components
  const [inputArea, setInputArea] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [switchFocus, setSwitchFocus] = useState("Regions");

  return (
    <>
      <div className="fixed inset-0 top-24 w-full h-24 bg-white z-[104]"></div>
      <div className="flex fixed left-[50%] translate-x-[-50%] top-24 flex-col h-24 bg-transparent w-[838px] z-[105]">
        <FormInputs
          inputArea={inputArea}
          setInputArea={setInputArea}
          setSwitchFocus={setSwitchFocus}
          startDate={startDate}
          endDate={endDate}
        />
        {/* note: what formsinputs data and props needed */}
        {/* inputArea and setInputArea */}
        {/* startDate and setStartDate */}
        {/* endDate and setEndDate */}
        <ExpandedFormInputs
          switchFocus={switchFocus}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        {/* note: what expandedforminputs data and props needed */}
        {/* switchFocus and setSwitchFocus */}
      </div>
    </>
  );
};

export default SearchContainer;
