import RoomExcerpt from "./RoomExcerpt";
import { useGetRoomsQuery } from "./roomsSlice";
const RoomsList = () => {
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
    <div className="px-16 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 justify-center">
      {content}
    </div>
  );
};

export default RoomsList;
// TODO: <>{}() &0& #0# == Adding data to mongoose db by using add room function and asyncronous network
//
