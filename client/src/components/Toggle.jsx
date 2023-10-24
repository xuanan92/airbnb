import { Done } from "@mui/icons-material";
import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <button
      type="button"
      className="flex relative items-center p-2 w-14 h-8 bg-gray-400 rounded-3xl transition-all duration-200 ease-in-out"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`p-1 bg-white w-8 h-8 rounded-full ${
          toggle ? "absolute right-1" : "absolute left-1"
        }`}
      >
        {toggle ? <Done /> : ""}
      </div>
    </button>
  );
};

export default Toggle;
