import { Link } from "@mui/material";
import { useGetRoomsQuery } from "./roomsSlice";
import PropTypes from "prop-types";
import { StarRate } from "@mui/icons-material";

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
    <div className="flex flex-col gap-2 p-2 rounded-lg bg-slate-200">
      <div className="w-80">
        <img
          className="object-cover w-full object center"
          src={room.imgUrl}
          alt={room.owner}
        />
      </div>
      <div className="flex justify-between items-center">
        <p>
          <h5>{room.location}</h5>
        </p>
        <div className="flex items-center">
          <StarRate className="text-xl" />
          <p>{room.rating}</p>
        </div>
      </div>
      <p>{room.date.substring(0, 10)}...</p>
      <p>{room.price}</p>
      {/*  TODO: <>@@() &0& #0# =add delete button will show when logged in= */}
      {/*  TODO: <>@@() &0& #0# =add edit button will show when logged in= */}
      <Link to={`/rooms/${roomId}`} className="p-2">
        <button type="button">View Details</button>
      </Link>
    </div>
  );
};

export default RoomExcerpt;

RoomExcerpt.propTypes = {
  roomId: PropTypes.string.isRequired,
};
