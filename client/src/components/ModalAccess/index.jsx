import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";
/* eslint-disable */
const ModalAccess = ({
  handleModal,
  handleLogin,
  handleLogout,
  handleSignup,
}) => {
  const token = useSelector(selectCurrentToken);
  return (
    <>
      <div
        className="fixed inset-0 z-30 bg-transparent"
        onClick={handleModal}
      ></div>
      <div className="absolute py-1 w-60 text-black z-[110] -bottom-1 right-0 translate-y-[100%] bg-white rounded-lg border shadow-md text-left">
        <ul className="flex flex-col">
          {!token ? (
            <>
              <button
                className="text-left"
                onClick={() => {
                  handleLogin(), handleModal();
                }}
              >
                <li className="p-4 font-bold cursor-pointer hover:bg-gray-100">
                  Log in
                </li>
              </button>
              <button
                className="text-left"
                onClick={() => {
                  handleSignup(), handleModal();
                }}
              >
                <li className="p-4 cursor-pointer hover:bg-gray-100">
                  Sign up
                </li>
              </button>
              <hr />
            </>
          ) : (
            <>
              <Link className="p-4 hover:bg-gray-100">
                <li>
                  <b>Messages</b>
                </li>
              </Link>
              <Link className="p-4 hover:bg-gray-100">
                <li>
                  <b>Notifications</b>
                </li>
              </Link>
              <ddLink className="p-4 hover:bg-gray-100">
                <li>
                  <b>Trips</b>
                </li>
              </ddLink>
              <Link className="p-4 hover:bg-gray-100">
                <li>
                  <b>Wishlists</b>
                </li>
              </Link>
              <hr />
              <Link className="p-4 hover:bg-gray-100">
                <li>Manage listings</li>
              </Link>
              <Link className="p-4 hover:bg-gray-100">
                <li>Refer a Host</li>
              </Link>
              <Link to="/account-settings" className="p-4 hover:bg-gray-100">
                <li>Account</li>
              </Link>
              <hr />
            </>
          )}
          <hr />
          <Link className="p-4 hover:bg-gray-100">
            <li>Gift cards</li>
          </Link>
          {!token ? (
            <Link className="p-4 hover:bg-gray-100">
              <li>Airbnb your home</li>
            </Link>
          ) : (
            ""
          )}
          <Link className="p-4 hover:bg-gray-100">
            <li>Help Center</li>
          </Link>
          {token ? (
            <div
              onClick={() => {
                handleLogout(), handleModal();
              }}
            >
              <li className="p-4 cursor-pointer hover:bg-gray-100">Log out</li>
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
};

export default ModalAccess;
