import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import GetAways from "../components/Footer/GetAways";
const PrimeLayout = () => {
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

export default PrimeLayout;
