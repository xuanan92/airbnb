import Avagroup from "./Avagroup.jsx";
import Logo from "./Logo.jsx";
import SearchGroup from "./SearchGroup.jsx";
const Header = () => {
  return (
    <div className="grid grid-cols-3 px-16 h-24 shadow-sm z-60 shadow-gray-200">
      <Logo />
      {/* // TODO: <>@@() &0& #0# =onCLick this div show animation= */}
      <SearchGroup />
      {/* // TODO: <>@@() &0& #0# =onClick show modal of sign up..bla= */}
      <Avagroup />
    </div>
  );
};
export default Header;
