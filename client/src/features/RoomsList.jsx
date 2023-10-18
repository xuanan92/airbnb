import { useGetRoomsQuery } from "./roomsSlice";

const RoomsList = () => {
  const {
    data: rooms,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRoomsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = rooms.ids.map((room) => {
      return (
        <div key={room._id}>
          <h1>{room.location}</h1>
        </div>
      );
    });
  } else if (isError) {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h1>listing</h1>
      {content}
    </div>
  );
};

export default RoomsList;
