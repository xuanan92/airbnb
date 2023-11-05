import { Done } from "@mui/icons-material";

const ToggleButton = ({ toggleChange, isToggle, children }) => {
  return (
    <div
      className="flex flex-row gap-2 justify-between items-center p-4 h-full rounded-xl border cursor-pointer select-none"
      onClick={toggleChange}
    >
      <div>{children}</div>
      <div className="flex relative items-center px-1 w-16 h-10 bg-gray-400 rounded-full">
        <div
          className={`border p-1 bg-white flex items-center justify-between w-8 aspect-square rounded-full transition-all duration-400 ${
            isToggle ? "translate-x-6" : ""
          }`}
        >
          {isToggle ? <Done /> : ""}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
