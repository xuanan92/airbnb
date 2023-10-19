import PropTypes from "prop-types";
const IconRoom = ({ item }) => {
  return (
    <div className="p-4 w-auto text-center">
      <item.Icon className="w-10 h-10" />
      <p className="whitespace-nowrap">{item.name}</p>
    </div>
  );
};

export default IconRoom;

IconRoom.propTypes = {
  item: PropTypes.object.isRequired,
};
