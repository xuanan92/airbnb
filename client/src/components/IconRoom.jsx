import PropTypes from "prop-types";
const IconRoom = ({ item }) => {
  return (
    <button className="p-4 text-center transition-all duration-300 hover:text-black hover:underline focus:text-black focus:underline active:scale-90 decoration-gray-300 decoration-2 hover:underline-offset-[14px] hover:decoration-gray-300 focus:underline-offset-[14px] focus:decoration-black">
      <item.Icon className="w-10 h-10" />
      <p className="whitespace-nowrap">{item.name}</p>
    </button>
  );
};

export default IconRoom;

IconRoom.propTypes = {
  item: PropTypes.object.isRequired,
};
