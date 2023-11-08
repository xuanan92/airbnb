import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { StarRate } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
const RapidRoomExcerpt = ({ room }) => {
  return (
    <div className="flex flex-col">
      <Link to={`/rooms/${room.id}`}>
        <div className="flex flex-col p-2 rounded-lg">
          <div className="w-full">
            <img
              className="object-cover object-center w-full"
              src={room.images[0]}
              alt="any"
            />
          </div>
          <div className="flex justify-between items-center pt-4 text-black">
            <h4>{room.name}</h4>
            <Grid container direction="row" alignItems="center">
              <StarRate className="" />
              <p className="text-xl">{room.rating}</p>
            </Grid>
          </div>
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

export default RapidRoomExcerpt;

RapidRoomExcerpt.propTypes = {
  roomId: PropTypes.string.isRequired,
};
