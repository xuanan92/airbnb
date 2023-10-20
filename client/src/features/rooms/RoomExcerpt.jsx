import PropTypes from "prop-types";
import { useGetRoomsQuery } from "./roomsSlice";
const RoomExcerpt = ({ roomId }) => {
  const { room, isLoading } = useGetRoomsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      room: data?.entities[roomId],
      isLoading,
    }),
  });
  if (isLoading) {
    return <div> ...Loading </div>;
  }
  if (!room) {
    <div>No room found</div>;
  }
  return (
    <div>
      <p>{room.location}</p>
    </div>
  );
};

export default RoomExcerpt;

RoomExcerpt.propTypes = {
  roomId: PropTypes.object.isRequired,
};
