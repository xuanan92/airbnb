import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RoomsList from "./features/rooms/RoomsList";
import SingleRoom from "./features/rooms/SingleRoom";
import AddRoom from "./features/rooms/AddRoom";
import EditRoom from "./features/rooms/EditRoom";
import Account from "./components/Account";
import Giftcards from "./components/Giftcards";
import Redeem from "./components/Redeem";

// import PersistLogin from "./features/auth/PersistLogin";

function App() {
  // SOME: <>@@() &0& #0# =change icon and css for filters scrollbar=
  // SOME: <>@@() &0& #0# =add more motel to the app=
  // SOME: <>@@() &0& #0# =add slide css to roomexcerpt=
  // SOME: <>@@() &0& #0# =create filter button => new modal filter created=
  // SOME: <>@@() &0& #0# =Adding footer=
  // SOME: <>@@() &0& #0# =add slide with 5 points below Image Slider=
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RoomsList />} />
          <Route path="rooms">
            <Route index element={<RoomsList />} />
            <Route path="addroom">
              <Route index element={<AddRoom />} />
            </Route>
            <Route path=":roomId">
              <Route index element={<SingleRoom />} />

              <Route path="edit" element={<EditRoom />} />
            </Route>
          </Route>

          {/* <Route element={<PersistLogin />}> */}
          <Route path="account-settings" element={<Account />} />
          {/* </Route> */}
        </Route>
        <Route path="giftcards" element={<Giftcards />} />
        <Route path="gift" element={<Redeem />} />
      </Routes>
    </div>
  );
}

export default App;
