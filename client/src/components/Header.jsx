import Avagroup from "./Avagroup.jsx";
import Logo from "./Logo.jsx";
const Header = () => {
  return (
    <div className="grid grid-cols-3 px-16 h-24 shadow-sm shadow-gray-200">
      <Logo />
      {/* // TODO: <>@@() &0& #0# =onCLick this div show animation= */}
      <div className="flex justify-center items-center cursor-pointer">
        <div className="flex gap-2 justify-between items-center p-4 px-8 text-xl rounded-full border shadow-sm shadow-gray-400 hover:shadow-gray-500">
          <div className="text-black font-regular">Anywhere</div>
          <div className="border-l border-gray-900"></div>
          <div className="text-black font-regular">Any week</div>
          <div className="border-l border-gray-300"></div>
          <div className="">Add guests</div>
          <div className="p-1 bg-red-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 font-bold text-white"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <Avagroup />
    </div>
  );
};
export default Header;
