import { Link } from "react-router-dom";
const Modal = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-transparent"
        id="modalWrapper"
      ></div>
      <div className="absolute  py-1 w-60 text-black z-50 -bottom-1 right-0 translate-y-[100%] bg-white rounded-lg border shadow-md text-left">
        <ul className="flex flex-col">
          <Link to="" className="p-4 font-bold hover:bg-gray-100">
            <li>Sign up</li>
          </Link>
          <Link className="p-4 hover:bg-gray-100">
            <li>Log in</li>
          </Link>
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
    </>
  );
};

export default Modal;
