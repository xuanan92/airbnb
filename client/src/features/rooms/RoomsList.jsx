import { useEffect, useState } from "react";
import RoomExcerpt from "./RoomExcerpt";
import { useGetRoomsQuery } from "./roomsApiSlice";
import { v4 as uuidv4 } from "uuid";

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
    }, 0); // Delay of 1 second (1000 milliseconds)

    return () => clearTimeout(delay);
  }, []);
  let content;
  if (isLoading || !showContent) {
    content = <div className="w-full text-xl italic font-bold">Loading...</div>;
  } else if (isSuccess) {
    content = roomIds?.ids?.map((roomId) => (
      <RoomExcerpt key={uuidv4()} roomId={roomId} />
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="px-16 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 justify-center">
      {content}
    </div>
  );
};

export default RoomsList;
// SOME: <>{}() &0& #0# == Adding data to mongoose db by using add room function and asyncronous network
//
