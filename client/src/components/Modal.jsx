import AddRoom from "../features/rooms/AddRoom";

const Modal = () => {
  return (
    <div className="fixed top-1/2 left-1/2 w-9/12 h-3/4 bg-red-100 rounded-lg border -translate-x-1/2 -translate-y-1/2">
      <AddRoom />
    </div>
  );
};

export default Modal;
