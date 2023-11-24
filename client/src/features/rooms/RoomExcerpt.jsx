import { Link } from "react-router-dom";
import { useGetRoomsQuery } from "./roomsApiSlice";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  StarRate,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import ImgSlide from "./ImgSlide";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format, parseISO } from "date-fns";

const RoomExcerpt = ({ roomId }) => {
  const refImg = useRef(null);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  useEffect(() => {
    setMaxCount(
      Math.floor(refImg.current.scrollWidth / refImg.current.clientWidth),
    );
  }, [maxCount]);
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
  const clickLeft = () => {
    refImg.current.scrollLeft -= refImg.current.clientWidth;
    setCount((prev) => prev - 1);
    if (count < 0) setCount(0);
    // refImg.current.scrollLeft - refImg.current.scrollWidth / slideMaxCount;
  };
  const clickRight = () => {
    refImg.current.scrollLeft += refImg.current.clientWidth;
    if (count >= maxCount) {
      setCount(maxCount);
    } else {
      setCount((prev) => prev + 1);
    }
    // refImg.current.scrollLeft + refImg.current.scrollWidth / slideMaxCount;
  };

  const imgArray = Object.values(room?.images);

  let dateString;
  if (
    format(parseISO(room?.checkin), "MMM") ===
    format(parseISO(room?.checkout), "MMM")
  ) {
    dateString = (
      <div>
        {format(parseISO(room?.checkin), "MMM dd")} -{" "}
        {format(parseISO(room?.checkout), "dd")}
      </div>
    );
  } else {
    dateString = (
      <div>
        {format(parseISO(room?.checkin), "MMM dd")} -{" "}
        {format(parseISO(room?.checkout), "MMM dd")}
      </div>
    );
  }
  // SOME: <>@@() &0& #0# =change scroll slide images to click return each image, and css is slide left
  // NEXT: <>@@() &0& #0# =Limit presenting rooms and allow to have show more function

  return (
    <div className="flex flex-col">
      <div className="flex relative flex-row w-auto transition ease-in-out group duration-2000">
        <div
          ref={refImg}
          className="flex overflow-hidden flex-auto h-60 rounded-xl no-scrollbar scroll-smooth"
        >
          {imgArray?.map((image) => (
            <>
              <ImgSlide
                key={uuidv4()}
                image={image}
                length={imgArray.length - 1}
              />
            </>
          ))}
        </div>
        {count > 0 && (
          <button
            type="button"
            onClick={clickLeft}
            className="hidden active:scale-125 active:transition-all duration-1000 group-hover:flex absolute left-0 top-[50%] translate-y-[-50%] justify-start items-center p-1"
          >
            <KeyboardArrowLeft className="bg-white rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}
        {count < maxCount && (
          <button
            type="button"
            onClick={clickRight}
            className="hidden active:scale-125 active:transition-all duration-1000 group-hover:flex absolute right-0 justify-end items-center p-1 top-[50%] translate-y-[-50%]"
          >
            <KeyboardArrowRight className="bg-white rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}
      </div>
      <Link to={`/rooms/${roomId}`}>
        <div className="flex justify-between items-center pt-4 text-black">
          <h4>{room.publicAddress.substring(0, 25)}...</h4>
          <Grid container direction="row" alignItems="center">
            <StarRate className="" />
            <p className="text-xl">{room.avgRating}</p>
          </Grid>
        </div>
        {dateString}
        <p>Stay in {room.roomType}</p>
        <p className="text-black">
          <span className="text-xl font-bold">{room.price}</span> night
        </p>
        {/*  NEXT: <soon>@@() &0& #0# =add delete button will show after logged in= */}
        {/*  NEXT: <soon>@@() &0& #0# =add edit button will show after logged in= */}
      </Link>
    </div>
  );
};

export default RoomExcerpt;
