import { store } from "../../app/store";
import { roomsApiSlice } from "../rooms/roomsApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");
    const rooms = store.dispatch(roomsApiSlice.endpoints.getRooms.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      console.log("unsubscribing");
      rooms.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
// SOME: <>@@() &0& #0# =try to use usePrefetch built in of RTKQuery=
export default Prefetch;
