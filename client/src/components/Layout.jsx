import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigator from "./Navigator";
import Footer from "./Footer";
import GetAways from "./GetAways";
const Layout = () => {
  return (
    <div>
      <Header />
      <Navigator />
      <Outlet />
      <GetAways />
      <Footer />
    </div>
  );
};

export default Layout;
