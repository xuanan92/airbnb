import Avagroup from "./Avagroup.jsx";
import Logo from "../Logo.jsx";
import SearchGroup from "./SearchGroup.jsx";
const Header = () => {
  return (
    <div className="grid grid-cols-3 px-16 h-24 shadow-sm shadow-gray-200">
      <Logo />
      {/* // SOME: <>@@() &0& #0# =onCLick this div show animation= */}
      <SearchGroup />
      <Avagroup />
    </div>
  );
};
export default Header;
