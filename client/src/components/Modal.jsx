import { Link } from "react-router-dom";
import { useState } from "react";
import SignupForm from "./SignupForm";
const Modal = ({ handleModalClose }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };
  return (
    <>
      <div
        className="fixed inset-0 z-30 bg-transparent"
        onClick={handleModalClose}
      ></div>
      <div className="absolute py-1 w-60 text-black z-40 -bottom-1 right-0 translate-y-[100%] bg-white rounded-lg border shadow-md text-left">
        <ul className="flex flex-col">
          <div onClick={handleSignUp}>
            <li className="p-4 font-bold cursor-pointer hover:bg-gray-100">
              Sign up
            </li>
          </div>
          <div onClick={handleSignUp}>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Log in</li>
          </div>
          <hr />
          <Link className="p-4 hover:bg-gray-100">
            <li>Gift cards</li>
          </Link>
          <Link className="p-4 hover:bg-gray-100">
            <li>Airbnb your home</li>
          </Link>
          <Link className="p-4 hover:bg-gray-100">
            <li>Help Center</li>
          </Link>
        </ul>
      </div>
      {isSignUpOpen && <SignupForm handleSignUpClose={handleSignUp} />}
    </>
  );
};

export default Modal;
