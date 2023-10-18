import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navigator from "./Navigator"
const Layout = () => {
  return (
    <div>
      <Header />
      <Navigator />
      <Outlet />
    </div>
  )
}

export default Layout
