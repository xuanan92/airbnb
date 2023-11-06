import { useGetRoomsQuery } from "./roomsSlice";
import { useParams } from "react-router-dom";

const SingleRoom = () => {
  const { roomId } = useParams();
  const { room, isLoading } = useGetRoomsQuery("getRooms", {
    selectFromResult: ({ data, isLoading }) => ({
      room: data?.entities[roomId],
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
    <div className="flex px-20 m-auto w-8/12 flex-cols">
      <div className="w-[60%]">
        <div className="grid">
          <div className="flex">
            <div className="flex-auto py-8 text-black">
              <h2>Title of the place post</h2>
              <ol className="inline-flex gap-4 text-xl">
                <span>4 guests</span>
                <span>1 bed room</span>
                <span>2 beds</span>
                <span>1 bath</span>
              </ol>
            </div>
            <div className="flex overflow-hidden items-center w-14">
              <img
                className="object-center rounded-full aspect-square"
                src="/imgs/avatar.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <p>{room.location}</p>
          <p>{room.rating}</p>
          <p>{room.owner}</p>
          <p>{room.date}</p>
          <p>${room.price} night</p>
        </div>
      </div>
      <div className="flex-auto">
        <form className="sticky ml-auto w-2/3 rounded-xl shadow-md h-[300px]">
          <div>$ night</div>
          <div>$ night</div>
          <div>$ night</div>
          <div>$ night</div>
          <div>$ night</div>
        </form>
      </div>
    </div>
  );
};

export default SingleRoom;
