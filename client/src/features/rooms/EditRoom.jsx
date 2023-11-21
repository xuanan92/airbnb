import { useState } from "react";
import { useAddRoomMutation } from "./roomsApiSlice";
import { useNavigate } from "react-router-dom";
const EditRoom = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState(
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
  );
  const navigate = useNavigate();

  const onSaveClick = async () => {
    if (!isLoading) {
      try {
        await addRoom({ location, price, imgUrl }).unwrap();
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
      <form className="flex flex-col gap-2 p-4 m-auto bg-green-300 rounded-md w-90">
        <label className="flex">
          <p className="w-44">Location:</p>
          <input
            className="p-1 w-full rounded-md"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label className="flex">
          <p className="w-44">Price ($/night):</p>
          <input
            className="p-1 w-full rounded-md"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="flex">
          <p className="w-44">Owner</p>
          <select className="p-1 w-full bg-white rounded-md">
            <option value=""></option>
            {/* NEXT: <soon>@@() &0& #0# =need to mark options of owner here= */}
          </select>
        </label>
        {/* NEXT: <soon>@@() &0& #0# =add upload images feature later= */}
        <label className="flex">
          <p className="w-44">Images Url:</p>
          <input
            className="object-contain object-center p-1 w-full rounded-md"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>
        <button type="button" onClick={onSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditRoom;
