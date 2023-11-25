import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logOut, selectCurrentToken } from "../../features/auth/authSlice";
import SignupForm from "../../features/users/SignupForm";
import ModalAccess from "../ModalAccess";
import Login from "../../features/auth/Login";

const Avagroup = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSignup = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };
  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="flex relative gap-2 items-center ml-auto">
      {!token ? (
        <h6 className="p-4 font-medium text-black hover:bg-gray-100 hover:rounded-full">
          Airbnb your home
        </h6>
      ) : (
        <h6 className="p-4 font-medium text-black hover:bg-gray-100 hover:rounded-full">
          Switch to hosting
        </h6>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="p-4 w-14 font-semibold rounded-full hover:bg-gray-100 aspect-square"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>

      {/* avatar button */}
      <button
        className="flex relative gap-4 items-center py-2 px-4 rounded-full border hover:shadow-lg hover:shadow-gray-300"
        onClick={handleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {/* avatar button is here */}
        <div className="gap-2 p-2 bg-gray-500 rounded-full border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative top-1 w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isModalOpen && (
        <ModalAccess
          handleModal={handleModal}
          handleSignup={handleSignup}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      )}
      {isSignUpOpen && <SignupForm handleSignup={handleSignup} />}
      {isLoginOpen && <Login handleLogin={handleLogin} />}
    </div>
  );
};

export default Avagroup;
