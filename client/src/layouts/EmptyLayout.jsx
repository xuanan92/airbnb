import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const EmptyLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
export default EmptyLayout;
