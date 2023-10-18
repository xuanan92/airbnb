import { Link } from "react-router-dom";
import RoomExcerpt from "./RoomExcerpt";
import { useGetRoomsQuery } from "./roomsSlice";
const RoomContent = () => {
  const {
    data: roomIds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRoomsQuery();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = roomIds.ids.map((roomId) => (
      <RoomExcerpt key={roomId} roomId={roomId} />
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h1>Room List</h1>
      <button>
        <Link to="/rooms/addroom" className="btn btn-primary">
          Add Room
        </Link>
      </button>
      <div className="flex flex-wrap gap-4 justify-center">{content}</div>
    </div>
  );
};

export default RoomContent;
// TODO: <>{}() &0& #0# == Adding data to mongoose db by using add room function and asyncronous network
