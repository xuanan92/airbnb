import { Route, Routes } from "react-router-dom";
import PrimeLayout from "./layouts/PrimeLayout";
import RoomsList from "./features/rooms/RoomsList";
import AddRoom from "./features/rooms/AddRoom";
import SingleRoom from "./features/rooms/SingleRoom";
import EditRoom from "./features/rooms/EditRoom";
import EmptyLayout from "./layouts/EmptyLayout";
import Giftcards from "./pages/Giftcards";
import Redeem from "./pages/Redeem";
import DashLayout from "./layouts/DashLayout";
import AccountSettings from "./features/users/AccountSettings";

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
        <Route path="/" element={<PrimeLayout />}>
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
        </Route>

        <Route path="/" element={<EmptyLayout />}>
          <Route path="giftcards" element={<Giftcards />} />
          <Route path="gift" element={<Redeem />} />
        </Route>

        <Route path="/" element={<DashLayout />}>
          {/* <Route element={<PersistLogin />}> */}
          <Route path="account-settings" element={<AccountSettings />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
