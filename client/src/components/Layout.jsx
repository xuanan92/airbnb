import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigator from "./Navigator";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <Navigator />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
