import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import RoomsList from "./features/RoomsList";

function App() {
  return (
    <>
      <div>
        <h1>This is navigator</h1>
        <p>and its description</p>
        <p>and its description</p>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/rooms" element={<RoomsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
