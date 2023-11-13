import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RoomsList from "./features/rooms/RoomsList";
import SingleRoom from "./features/rooms/SingleRoom";
import AddRoom from "./features/rooms/AddRoom";
import EditRoom from "./features/rooms/EditRoom";
import Account from "./components/Account";

function App() {
  // NOTE: <someday>@@() &0& #0# =change icon and css for filters scrollbar=
  // NOTE: <someday>@@() &0& #0# =add more motel to the app=
  // NOTE: <someday>@@() &0& #0# =add slide css to roomexcerpt=
  // NOTE: <someday>@@() &0& #0# =create filter button => new modal filter created=
  // NOTE: <soemday>@@() &0& #0# =Adding footer=
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

          <Route path="account-settings" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
