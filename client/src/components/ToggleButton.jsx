import { Done } from "@mui/icons-material";

const ToggleButton = ({ toggleChange, isToggle, children }) => {
  return (
    <div
      className="flex flex-row gap-2 justify-between items-center p-4 h-full rounded-xl border cursor-pointer select-none"
      onClick={toggleChange}
    >
      <div>{children}</div>
      <div
        className={`flex items-center px-1 w-16 h-10 transition ease-in-out duration-400 rounded-full ${
          isToggle ? "bg-black" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-0 transition-all bg-transparent ${
            isToggle ? "transition-all ease-in-out w-full" : ""
          }`}
        ></div>
        <div
          className={`border p-1 bg-white flex items-center justify-between w-8 aspect-square rounded-full `}
        >
          {isToggle ? <Done /> : ""}
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
