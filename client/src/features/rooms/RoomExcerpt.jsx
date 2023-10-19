import PropTypes from "prop-types";
import { useGetRoomsQuery } from "./roomsSlice";
const RoomExcerpt = ({ roomId }) => {
  const { room, isLoading } = useGetRoomsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      room: data?.entities[roomId],
      isLoading,
    }),
  });
  if (!isLoading) {
    return (
      <div>
        <h3>{room.location}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>No post found</h3>
    </div>
  );
};

export default RoomExcerpt;

RoomExcerpt.propTypes = {
  roomId: PropTypes.object.isRequired,
};
