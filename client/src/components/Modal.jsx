const Modal = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-transparent"
        id="modalWrapper"
      ></div>
      <div className="absolute py-1 w-60 text-black z-50 -bottom-1 right-0 translate-y-[100%] bg-white rounded-lg border shadow-md text-left">
        <ul className="flex flex-col">
          <li className="p-4 font-bold hover:bg-gray-100">Sign up</li>
          <li className="p-4 hover:bg-gray-100">Log in</li>
          <hr />
          <li className="p-4 hover:bg-gray-100">Gift cards</li>
          <li className="p-4 hover:bg-gray-100">Airbnb your home</li>
          <li className="p-4 hover:bg-gray-100">Help Center</li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
