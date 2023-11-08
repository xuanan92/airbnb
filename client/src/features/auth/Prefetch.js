import { store } from "../../app/store";
import { roomsApiSlice } from "../rooms/roomsApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      roomsApiSlice.util.prefetch("getRooms", "roomsList", { force: true }),
    );
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true }),
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;
