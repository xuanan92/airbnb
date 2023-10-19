import { useState } from "react";
import { useAddRoomMutation } from "./roomsSlice";
import { useNavigate } from "react-router-dom";
const AddRoom = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const onSaveClick = async () => {
    if (!isLoading) {
      try {
        await addRoom({ location, price }).unwrap();
        setLocation("");
        setPrice(0);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="flex items-center h-full">
      <form className="flex flex-col gap-2 p-4 m-auto w-64 bg-green-300 rounded-lg">
        <label className="flex">
          <p className="w-44">Location:</p>
          <input
            className="w-full"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className="flex">
          <p className="w-44">Price ($/night):</p>
          <input
            className="w-full"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        {/* TODO: <>@@() &0& #0# =add upload images feature later= */}
        {/* <label className="flex"> */}
        {/*   <p className="w-44">Images:</p> */}
        {/*   <input className="w-full" type="file" /> */}
        {/* </label> */}
        <button type="button" onClick={onSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
