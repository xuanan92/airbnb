import PropTypes from "prop-types";
const RoomExcerpt = ({ roomId }) => {
  return (
    <div>
      <h3>{roomId.title}</h3>
    </div>
  );
};

export default RoomExcerpt;

RoomExcerpt.propTypes = {
  roomId: PropTypes.object.isRequired,
};
