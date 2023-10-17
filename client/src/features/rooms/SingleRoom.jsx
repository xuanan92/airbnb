import { useGetRoomsQuery } from "./roomsSlice";
import { useParams } from "react-router-dom";

const SingleRoom = () => {
  const { roomId } = useParams();
  const { room, isLoading } = useGetRoomsQuery("getRooms", {
    selectfromResult: ({ data, isLoading }) => ({
      room: data.entities[roomId],
      isLoading,
    }),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!room) {
    return <div>Room not found</div>;
  }
  return (
    <div>
      <h1>SingleRoom</h1>
      <p>{room.location}</p>
      <p>{room.rating}</p>
      <p>{room.owner}</p>
      <p>{room.date}</p>
      <p>{room.price}</p>
    </div>
  );
};

export default SingleRoom;
