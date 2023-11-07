import { Link } from "react-router-dom";
import { useGetRoomsQuery } from "./roomsApiSlice";
import PropTypes from "prop-types";
import { StarRate } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
const RoomExcerpt = ({ roomId }) => {
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

  return (
    <div className="flex flex-col">
      <Link to={`/rooms/${roomId}`}>
        <div className="flex flex-col p-2 rounded-lg">
          <div className="w-full">
            <img
              className="object-cover object-center w-full"
              src={room.imgUrl}
              alt={room.owner}
            />
          </div>
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
          {/*  TODO: <>@@() &0& #0# =add delete button will show when logged in= */}
          {/*  TODO: <>@@() &0& #0# =add edit button will show when logged in= */}
        </div>
      </Link>
    </div>
  );
};

export default RoomExcerpt;

RoomExcerpt.propTypes = {
  roomId: PropTypes.string.isRequired,
};
