import { Add, Remove } from "@mui/icons-material";

const ModalGuests = () => {
  return (
    // done: code modal guests content
    <div className="flex w-full">
      <div className="flex-auto"></div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-2xl border border-gray-200 w-[400px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <b>Adults</b>
            <p className="text-sm">Age 13 or above</p>
          </div>
          <div className="flex gap-2 justify-between items-center w-20">
            <button className="p-1 rounded-full border">
              <Remove />
            </button>
            0
            <button className="p-1 rounded-full border">
              <Add />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <b>Children</b>
            <p className="text-sm">Age 2-12</p>
          </div>
          <div className="flex gap-2 justify-between items-center w-20">
            <button className="p-1 rounded-full border">
              <Remove />
            </button>
            0
            <button className="p-1 rounded-full border">
              <Add />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <b>Infants</b>
            <p className="text-sm">Under 2</p>
          </div>
          <div className="flex gap-2 justify-between items-center w-20">
            <button className="p-1 rounded-full border">
              <Remove />
            </button>
            0
            <button className="p-1 rounded-full border">
              <Add />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <b>Pets</b>
            <p className="text-sm underline">Bringing a service animal?</p>
          </div>
          <div className="flex gap-2 justify-between items-center w-20">
            <button className="p-1 rounded-full border">
              <Remove />
            </button>
            0
            <button className="p-1 rounded-full border">
              <Add />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGuests;
