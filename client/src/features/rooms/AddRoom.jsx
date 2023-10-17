const AddRoom = () => {
  return (
    <div className="flex items-center h-full">
      <form className="flex flex-col gap-2 p-4 m-auto w-64 bg-green-300 rounded-lg">
        <label className="flex">
          <p className="w-44">Location:</p>
          <input className="w-full" type="text" />
        </label>
        <label className="flex">
          <p className="w-44">Date:</p>
          <input className="w-full" type="text" />
        </label>
        <label className="flex">
          <p className="w-44">Rating:</p>
          <input className="w-full" type="number" />
        </label>
        <label className="flex">
          <p className="w-44">Price ($/night):</p>
          <input className="w-full" type="number" />
        </label>
        <button>Upload Image</button>
      </form>
    </div>
  );
};

export default AddRoom;
