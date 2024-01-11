import { Link } from "react-router-dom";
import Avagroup from "../../../../components/Header/Avagroup";
import Logo from "../../../../components/Logo";

const SearchHeader = ({ handleGeoModal, isSearchModal }) => {
  return (
    <div>
      <div
        onClick={handleGeoModal}
        className="grid fixed top-0 left-0 grid-cols-3 px-16 w-full h-24 bg-white z-[104] shadow-gray-200"
      >
        <Logo />
        {/* NEXT: <>@@() &0& #0# =update css here= */}
        <div
          className={`${
            !isSearchModal ? "scale-0" : "top-8 scale-100"
          } flex animation-appear m-auto p-2 gap-6 focus:underline focus:underline-offset-8 focus:decoration-black decoration-2`}
        >
          {/* NEXT: __PLAN(){} &0& #0# This is setup as Tab onFocus show Id, onBlur disable it */}
          <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
            Stays
          </button>
          <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
            Experiences
          </button>
          <button className="hover:text-gray-400 hover:underline decoration-2 decoration-gray-400 hover:underline-offset-8">
            <Link to="/s/experiences/online">Online Experiences</Link>
          </button>
        </div>
        <Avagroup />
      </div>
    </div>
  );
};

export default SearchHeader;
