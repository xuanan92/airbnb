import {
  Balcony,
  BeachAccess,
  BedroomParent,
  BlurCircular,
  Business,
  CancelSharp,
  Castle,
  CorporateFare,
  Cottage,
  Domain,
  HolidayVillage,
  Houseboat,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocationCity,
  Park,
  Plumbing,
  Pool,
  Terrain,
  Tune,
  Vrpano,
  Waves,
} from "@mui/icons-material";
import IconRoom from "./IconRoom";
import Toggle from "./Toggle";
import { useState } from "react";
import { useRef } from "react";

const Navigator = () => {
  const ref = useRef(null);
  let [count, setCount] = useState(0);
  const clickLeft = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - ref.current.clientWidth;
    setCount(count--);
  };
  const clickRight = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + ref.current.clientWidth;
    setCount(count++);
  };

  const handleToggle = () => {};
  return (
    <div className="flex flex-row-reverse gap-4 items-center py-4 px-16">
      <div className="flex gap-2 items-center p-4 font-medium rounded-xl border">
        <p className="whitespace-nowrap">Display total before taxes</p>
        <Toggle toggleChange={handleToggle} />
      </div>
      <div className="flex gap-2 items-center p-4 text-black rounded-xl border">
        <Tune />
        <p>Filters</p>
      </div>
      <div className="flex relative flex-auto items-center">
        <div className="flex absolute flex-auto justify-between items-center w-full">
          <button
            type="button"
            onClick={clickLeft}
            className="overscroll-y-contain p-1 bg-white rounded-full border hover:shadow-lg hover:scale-125"
          >
            <KeyboardArrowLeft />
          </button>

          <button
            type="button"
            onClick={clickRight}
            className="p-1 bg-white rounded-full border hover:shadow-lg hover:scale-125"
          >
            <KeyboardArrowRight />
          </button>
        </div>
        <div
          ref={ref}
          className="flex overflow-x-scroll flex-auto items-center w-0 scroll-smooth"
        >
          {categoryfilters.map((item, index) => (
            <IconRoom key={index} item={item} />
          ))}
        </div>
      </div>
      {/* TODO: <design>@15@(m) &0& #0# =Adding click function to left right button arrows= */}
      {/* TODO: <design>@@(l) &0& #0# =make area nearby button transparent= */}
      {/* TODO: <context level>@time@(resource) &0& #0# =action= */}
      {/* TODO: <A>@@() &0& #0# =show modal after click on avatar with content (includes settings;= */}
      {/* TODO: <A>@@() &0& #0# =fix header with zoomin animation show additional components for searching= */}
      {/*  TODO: <A>@@() &0& #0# =adding search function in details <time consuming>= */}
      {/* TODO: <A>@@() &0& #0# =Adding filter function for rooms= */})
      {/* TODO: <A>@@() &0& #0# =add singgle page Airbnb your home= */}
      {/* TODO: <B>@@() &0& #0# =add footer content and corresponding contents= */}
      {/* TODO: <A>@@() &0& #0# =adding user login functions= */}
      {/* // TODO: <B>@@( &0& #0# =host backend with a free service or using json-server= */}
      {/* TODO: <B>@@() &0& #0# =set link in profile= */}
      {/* // TODO: <>@@() &0& #0# =pause here= */}
    </div>
  );
};

export default Navigator;

const categoryfilters = [
  {
    Icon: Cottage,
    name: "Tiny homes",
  },
  {
    Icon: Domain,
    name: "Iconic cities",
  },
  {
    Icon: HolidayVillage,
    name: "Camping",
  },
  {
    Icon: BedroomParent,
    name: "Rooms",
  },
  {
    Icon: Vrpano,
    name: "Amazing views",
  },
  {
    Icon: Houseboat,
    name: "Houseboats",
  },
  {
    Icon: Castle,
    name: "Mansions",
  },
  {
    Icon: BlurCircular,
    name: "Luxe",
  },
  {
    Icon: Plumbing,
    name: "Play",
  },
  {
    Icon: Terrain,
    name: "Top of the world",
  },
  {
    Icon: BeachAccess,
    name: "Beach",
  },
  {
    Icon: HolidayVillage,
    name: "Countryside",
  },
  {
    Icon: Pool,
    name: "OMG!",
  },
  {
    Icon: CorporateFare,
    name: "Cabins",
  },
  {
    Icon: Park,
    name: "Amazing pools",
  },
  {
    Icon: Waves,
    name: "Cabins",
  },
  {
    Icon: LocationCity,
    name: "Beach",
  },
  {
    Icon: Business,
    name: "Design",
  },
  {
    Icon: Balcony,
    name: "Countryside",
  },
  {
    Icon: CancelSharp,
    name: "Ski-in/out",
  },
  {
    Icon: CancelSharp,
    name: "Beachfront",
  },
  {
    Icon: CancelSharp,
    name: "Dammusi",
  },
  {
    Icon: CancelSharp,
    name: "Barns",
  },
  {
    Icon: CancelSharp,
    name: "Truli",
  },
  {
    Icon: CancelSharp,
    name: "Grand pianos",
  },
  {
    Icon: CancelSharp,
    name: "Containers",
  },
  {
    Icon: CancelSharp,
    name: "Boats",
  },
  {
    Icon: CancelSharp,
    name: "Nationalparks",
  },
  {
    Icon: CancelSharp,
    name: "Riads",
  },
  {
    Icon: CancelSharp,
    name: "Off-the-grid",
  },
  {
    Icon: CancelSharp,
    name: "Towers",
  },
  {
    Icon: CancelSharp,
    name: "Ryokans",
  },
  {
    Icon: CancelSharp,
    name: "Caves",
  },
  {
    Icon: CancelSharp,
    name: "Domes",
  },
  {
    Icon: CancelSharp,
    name: "Windmills",
  },
  {
    Icon: CancelSharp,
    name: "Islands",
  },
  {
    Icon: CancelSharp,
    name: "Arctic",
  },
  {
    Icon: CancelSharp,
    name: "New",
  },
  {
    Icon: CancelSharp,
    name: "Farms",
  },
  {
    Icon: CancelSharp,
    name: "Earth homes",
  },
  {
    Icon: CancelSharp,
    name: "Castles",
  },
  {
    Icon: CancelSharp,
    name: "Treehouses",
  },
  {
    Icon: CancelSharp,
    name: "Lake",
  },
  {
    Icon: CancelSharp,
    name: "Tropical",
  },
  {
    Icon: CancelSharp,
    name: "Lakefront",
  },
];
