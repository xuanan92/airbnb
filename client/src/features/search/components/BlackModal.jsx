const BlackModal = ({ handleSearchModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 transition-all z-[99]"
      onClick={handleSearchModal}
    ></div>
  );
};

export default BlackModal;
