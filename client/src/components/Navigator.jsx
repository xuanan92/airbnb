import {
  CancelSharp,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import IconRoom from "./IconRoom";

const Navigator = () => {
  return (
    <div className="flex flex-row-reverse gap-4 items-center py-4 px-16">
      <div className="flex">
        <p className="whitespace-nowrap">Display total before taxes</p>
        <p>switchOnButton</p>
      </div>
      <div>
        <p>Filters</p>
      </div>
      <div className="flex overflow-x-scroll relative items-center no-scrollbar">
        {/* TODO: <design>@15@(m) &0& #0# =Adding click function to left right button arrows= */}
        <div className="flex absolute justify-between items-center w-full">
          {/* TODO: <design>@@(l) &0& #0# =make area nearby button transparent= */}
          <button className="p-1 bg-gray-100 rounded-full border">
            <KeyboardArrowLeft />
          </button>
          <button className="p-1 bg-gray-100 rounded-full border">
            <KeyboardArrowRight />
          </button>
        </div>
        {categoryfilters.map((item) => (
          <IconRoom key={item.name} item={item} />
        ))}
        {/* TODO: <context level>@time@(resource) &0& #0# =action= */}
        {/* TODO: <A>@@() &0& #0# =show modal after click on avatar with content (includes settings;= */}
        {/* TODO: <A>@@() &0& #0# =fix header with zoomin animation show additional components for searching= */}
        {/*  TODO: <A>@@() &0& #0# =adding search function in details <time consuming>= */}
        {/* TODO: <A>@@() &0& #0# =Adding filter function for rooms= */})
        {/* TODO: <A>@@() &0& #0# =add singgle page Airbnb your home= */}
        {/* TODO: <B>@@() &0& #0# =add footer content and corresponding contents= */}
        {/* TODO: <A>@@() &0& #0# =adding user login functions= */}
        {/* // TODO: <B>@@() &0& #0# =host backend with a free service or using json-server= */}
        {/* TODO: <B>@@() &0& #0# =set link in profile= */}
      </div>
    </div>
  );
};

export default Navigator;

const categoryfilters = [
  {
    Icon: CancelSharp,
    name: "Amazing pools",
  },
  {
    Icon: CancelSharp,
    name: "Cabins",
  },
  {
    Icon: CancelSharp,
    name: "Beach",
  },
  {
    Icon: CancelSharp,
    name: "Design",
  },
  {
    Icon: CancelSharp,
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
