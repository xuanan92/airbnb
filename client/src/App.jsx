import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RoomContent from "./features/rooms/RoomContent";
import SingleRoom from "./features/rooms/SingleRoom";
import AddRoom from "./features/rooms/AddRoom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RoomContent />} />
          <Route path="rooms">
            <Route path="addroom">
              <Route index element={<AddRoom />} />
            </Route>
            <Route path=":postId">
              <Route index element={<SingleRoom />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
