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

  const imgArray = Object.values(room?.imgUrl);

  return (
    <div className="flex flex-col">
      <div className="flex relative flex-row w-auto">
        <div
          ref={refImg}
          className="flex overflow-hidden flex-auto rounded-xl no-scrollbar scroll-smooth"
        >
          {imgArray?.map((image) => (
            <>
              <ImgSlide
                key={uuidv4()}
                image={image}
                length={imgArray.length - 2}
              />
            </>
          ))}
        </div>
        {count > 0 && (
          <button
            type="button"
            onClick={clickLeft}
            className="flex absolute oeft-0 top-[50%] translate-y-[-50%] justify-start items-center p-1"
          >
            <KeyboardArrowLeft className="bg-white rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}
        {count < maxCount && (
          <button
            type="button"
            onClick={clickRight}
            className="flex absolute right-0 justify-end items-center p-1 top-[50%] translate-y-[-50%]"
          >
            <KeyboardArrowRight className="bg-white rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}
      </div>
      <Link to={`/rooms/${roomId}`}>
        <div className="flex justify-between items-center pt-4 text-black">
          <h4>{room.location}</h4>
          <Grid container direction="row" alignItems="center">
            <StarRate className="" />
            <p className="text-xl">{room.rating}</p>
          </Grid>
        </div>
        <p>
          {room.date.substring(0, 10)}...
          <br />
          {room.owner}
        </p>
        <p className="text-black">
          <span className="text-xl font-bold">
            ${room.price.toLocaleString()}
          </span>{" "}
          night
        </p>
        {/*  NEXT: <soon>@@() &0& #0# =add delete button will show after logged in= */}
        {/*  NEXT: <soon>@@() &0& #0# =add edit button will show after logged in= */}
      </Link>
    </div>
  );
};

export default RoomExcerpt;
