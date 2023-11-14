import { useEffect, useState } from "react";
import RoomExcerpt from "./RoomExcerpt";
import { useGetRoomsQuery } from "./roomsApiSlice";

const RoomsList = () => {
  const {
    data: roomIds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRoomsQuery();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Delay of 1 second (1000 milliseconds)

    return () => clearTimeout(delay);
  }, []);
  let content;
  if (isLoading || !showContent) {
    content = <div className="w-full text-xl italic font-bold">Loading...</div>;
  } else if (isSuccess) {
    content = roomIds.ids.map((roomId, index) => (
      <RoomExcerpt key={index} roomId={roomId} />
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
// NOTE: <>{}() &0& #0# == Adding data to mongoose db by using add room function and asyncronous network
//
