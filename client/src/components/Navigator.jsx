import {
  Architecture,
  AutoMode,
  Balcony,
  BeachAccess,
  BedroomParent,
  BlurCircular,
  BrandingWatermark,
  BreakfastDining,
  Business,
  Castle,
  CellTower,
  CorporateFare,
  Cottage,
  DirectionsBoat,
  Domain,
  DownhillSkiing,
  Forest,
  Fort,
  GridGoldenratio,
  HolidayVillage,
  HouseSiding,
  Houseboat,
  Kayaking,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowRightSharp,
  Kitesurfing,
  LocalPizza,
  LocationCity,
  Mosque,
  OilBarrel,
  Park,
  Piano,
  Plumbing,
  Pool,
  Sanitizer,
  Sports,
  TakeoutDining,
  Terrain,
  Vrpano,
  WaterDamage,
  Waves,
  WindPower,
} from "@mui/icons-material";
import IconRoom from "./IconRoom";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Navigator = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  useEffect(() => {
    setMaxCount(Math.floor(ref.current.scrollWidth / ref.current.clientWidth));
  }, [maxCount]);
  const clickLeft = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - ref.current.clientWidth;
    setCount((prev) => prev - 1);
    if (count < 0) setCount(0);
  };
  const clickRight = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + ref.current.clientWidth;
    if (count >= maxCount) {
      setCount(maxCount);
    } else {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div className="flex z-20 flex-row-reverse gap-4 items-center py-4 px-16">
      {/* // SOME: <>@@() &0& #0# =add filter and filter taxes later= */}
      {/* <ToggleButton toggleChange={handleToggle} isToggle={isToggle}> */}
      {/*   <h5 className="whitespace-nowrap">Display total before taxes</h5> */}
      {/* </ToggleButton> */}
      {/* <button className="flex gap-2 items-center p-4 text-black rounded-xl border"> */}
      {/*   <Tune /> */}
      {/*   <p>Filters</p> */}
      {/* </button> */}
      <div className="flex relative flex-auto items-center">
        {count > 0 && (
          <button
            type="button"
            onClick={clickLeft}
            className="absolute left-0 p-1 bg-gradient-to-r from-white from-0% w-20 h-full to-transperant flex items-center justify-start"
          >
            <KeyboardArrowLeft className="rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}

        {count < maxCount && (
          <button
            type="button"
            onClick={clickRight}
            className="absolute right-0 p-1 bg-gradient-to-l from-white from-0% w-20 h-full to-transperant flex items-center justify-end"
          >
            <KeyboardArrowRight className="rounded-full border hover:shadow-lg hover:scale-125 aspect-square" />
          </button>
        )}

        <div
          ref={ref}
          className="flex overflow-hidden flex-auto order-2 items-center w-0 scroll-smooth"
        >
          {categoryfilters.map((item, index) => {
            return <IconRoom key={index} item={item} />;
          })}
        </div>
      </div>
      {/* NEXT: <user account>@@() &0& #0# =show modal after click on avatar with content (includes settings;= */}
      {/* NEXT: <search css>@@() &0& #0# =fix header with zoomin animation show additional components for searching= */}
      {/* NEXT: <search>@@() &0& #0# =adding search function in details <time consuming>= */}
      {/* NEXT: <search>@@() &0& #0# =Adding filter function for rooms= */}
      {/* // NEXT: <user login>@@() &0& #0# =user login with protected route= */}
      {/* // NEXT: <user login>@@() &0& #0# =After login successful will navigate to /dash= */}

      {/* SOME: <next>@30@(l) &0& #0# =add footer content and corresponding linked contents to database= */}
      {/* SOME: <someday>@@() &0& #0# =adding user login functions= */}
      {/* SOME: <someday>@@() &0& #0# =set link in profile= */}
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
    Icon: DownhillSkiing,
    name: "Ski-in/out",
  },
  {
    Icon: Kitesurfing,
    name: "Beachfront",
  },
  {
    Icon: WaterDamage,
    name: "Dammusi",
  },
  {
    Icon: OilBarrel,
    name: "Barns",
  },
  {
    Icon: HouseSiding,
    name: "Truli",
  },
  {
    Icon: Piano,
    name: "Grand pianos",
  },
  {
    Icon: TakeoutDining,
    name: "Containers",
  },
  {
    Icon: DirectionsBoat,
    name: "Boats",
  },
  {
    Icon: Park,
    name: "Nationalparks",
  },
  {
    Icon: Sanitizer,
    name: "Riads",
  },
  {
    Icon: GridGoldenratio,
    name: "Off-the-grid",
  },
  {
    Icon: CellTower,
    name: "Towers",
  },
  {
    Icon: BrandingWatermark,
    name: "Ryokans",
  },
  {
    Icon: Castle,
    name: "Caves",
  },
  {
    Icon: KeyboardDoubleArrowRightSharp,
    name: "Domes",
  },
  {
    Icon: WindPower,
    name: "Windmills",
  },
  {
    Icon: Mosque,
    name: "Islands",
  },
  {
    Icon: Architecture,
    name: "Arctic",
  },
  {
    Icon: AutoMode,
    name: "New",
  },
  {
    Icon: LocalPizza,
    name: "Farms",
  },
  {
    Icon: BreakfastDining,
    name: "Earth homes",
  },
  {
    Icon: Fort,
    name: "Castles",
  },
  {
    Icon: Forest,
    name: "Treehouses",
  },
  {
    Icon: Kayaking,
    name: "Lake",
  },
  {
    Icon: Sports,
    name: "Tropical",
  },
  {
    Icon: Cottage,
    name: "Lakefront",
  },
];
