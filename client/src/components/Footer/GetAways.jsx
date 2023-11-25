import { Link } from "react-router-dom";
import { useState } from "react";
const GetAways = () => {
  const [clickValue, setClickValue] = useState("");
  const handleClick = (e) => {
    const id = e.target.id;
    setClickValue(id);
  };
  let content;
  switch (clickValue) {
    case "popular":
      content = popular.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "arts":
      content = arts.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "outdoors":
      content = outdoors.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "mountains":
      content = mountains.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "beach":
      content = beach.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "unique":
      content = unique.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "categories":
      content = categories.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "todo":
      content = todo.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    case "friendly":
      content = friendly.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
    default:
      content = popular.map((item) => (
        <Link key={item.getawayTitle}>
          <h6>{item.getawayTitle}</h6>
          <p>{item.getawaySub}</p>
        </Link>
      ));
      break;
  }
  return (
    <div className="m-auto w-full bg-gray-100 border-b border-b-gray-300">
      <div className="py-8 text-center bg-white">
        <h4 className="py-4">Continue exploring tiny homes</h4>
        <button
          className="p-4 text-xl font-bold text-center text-white bg-black rounded-lg"
          type="button"
        >
          Show more
        </button>
      </div>
      <div className="py-8 px-40">
        <h3 className="py-4 font-medium text-black">
          Inspiration for future getaways
        </h3>
        <div className="flex gap-6 border-b border-b-gray-300">
          {/* SOME: <>@@() &0& #0# =add when click on below button show underline by css= */}
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="popular"
            onClick={handleClick}
          >
            Popular
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="arts"
            onClick={handleClick}
          >
            Arts & culture
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="outdoors"
            onClick={handleClick}
          >
            Outdoors
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="mountains"
            onClick={handleClick}
          >
            Mountains
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="beach"
            onClick={handleClick}
          >
            Beach
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="unique"
            onClick={handleClick}
          >
            Unique stays
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="categories"
            onClick={handleClick}
          >
            Categories
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="todo"
            onClick={handleClick}
          >
            Things to do
          </button>
          <button
            type="button"
            className="py-2 border-b focus:text-black active:scale-90 focus:border-b-black"
            id="friendly"
            onClick={handleClick}
          >
            Airbnb-friendly apartments
          </button>
        </div>
        <div className="grid grid-cols-6 gap-x-2 gap-y-4 pt-8">
          {/* SOME: <>@@() &0& #0# =display 17 link items get aways and 1 show more= */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default GetAways;

const popular = [
  {
    getawayTitle: "Canmore",
    getawaySub: "Chatlet rentals",
  },
  {
    getawayTitle: "Benlmadena",
    getawaySub: "Apartment rentals",
  },
  {
    getawayTitle: "Marbella",
    getawaySub: "Cottage rentals",
  },
  {
    getawayTitle: "Mijas",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Prescott",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Scottsdale",
    getawaySub: "Rentals with pools",
  },
  {
    getawayTitle: "Tucson",
    getawaySub: "Mansion rentals",
  },
  {
    getawayTitle: "Jasper",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Mountain View",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Devonport",
    getawaySub: "Cottage rentals",
  },
  {
    getawayTitle: "Mallacoota",
    getawaySub: "Beach house rentals",
  },
  {
    getawayTitle: "Ibiza",
    getawaySub: "Apartment rentals",
  },
  {
    getawayTitle: "Anaheim",
    getawaySub: "Family-friendly rentals",
  },
  {
    getawayTitle: "Monterey",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Paso Robles",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Santa Barbara",
    getawaySub: "Cottage rentals",
  },
  {
    getawayTitle: "Sonoma",
    getawaySub: "Cottage rentals",
  },
];
const arts = [
  {
    getawayTitle: "Phoenix",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Hot Springs",
    getawaySub: "Villa rentals",
  },
  {
    getawayTitle: "Los Angeles",
    getawaySub: "Cottage rentals",
  },
  {
    getawayTitle: "San Diego",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "San Francisco",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Barcelona",
    getawaySub: "Apartment rentals",
  },
  {
    getawayTitle: "Prague",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Washington",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Keswick",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "London",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Scarborough",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Sherwood Forest",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "York",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Paris",
    getawaySub: "Villa rentals",
  },
  {
    getawayTitle: "Rhodes",
    getawaySub: "Rentals with pools",
  },
  {
    getawayTitle: "Nashville",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Dublin",
    getawaySub: "Vacation rentals",
  },
];
const outdoors = [
  {
    getawayTitle: "Lake Martin",
    getawaySub: "Pet-friendly rentals",
  },
  {
    getawayTitle: "Banff",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Nerja",
    getawaySub: "Villa rentals",
  },
  {
    getawayTitle: "Greer",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Lake Havasu City",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Lake Powell",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "North Rim",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Payson",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Pinetop-Lakeside",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Red Rock",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Dinner Plain",
    getawaySub: "Pet-friendly rentals",
  },
  {
    getawayTitle: "Streaky Bay",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Emerald Lake",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Vancouver Island",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Victoria",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Idyllwild-Pine Cove",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Mammoth Lakes",
    getawaySub: "Vacation rentals",
  },
];
// SOME: <A>@@() &0& #0# =add static web data to database=
const mountains = [
  {
    getawayTitle: "Mentone",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Sedona",
    getawaySub: "Villa rentals",
  },
  {
    getawayTitle: "Helen",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Pine Mountain",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Stone Mountain",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Island Park",
    getawaySub: "Apartment rentals",
  },
  {
    getawayTitle: "Blue Mountains",
    getawaySub: "Cottage rentals",
  },
  {
    getawayTitle: "Asheville",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Blowing Rock",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Boone",
    getawaySub: "Vacation rentalsk",
  },
  {
    getawayTitle: "Hochatown",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Pigeon Forge",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Townsend",
    getawaySub: "Cabin rentals",
  },
  {
    getawayTitle: "Wears Valley",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Cabins",
    getawaySub: "Vacation rentals",
  },
];
const beach = [
  {
    getawayTitle: "Dauphin Island",
    getawaySub: "Rentals with pools",
  },
  {
    getawayTitle: "Fort Morgan",
    getawaySub: "Beach house rentals",
  },
  {
    getawayTitle: "Gold Shores",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Bruny Island",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Crescent Head",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Gerringong",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Hamilton Island",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Lancelin",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Melbourne Beach",
    getawaySub: "Coltage rentals",
  },
  {
    getawayTitle: "Moonta Bay",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Ocean Grove",
    getawaySub: "House rentals",
  },
  {
    getawayTitle: "Majorca",
    getawaySub: "Rentals with pools",
  },
  {
    getawayTitle: "Bif Sur",
    getawaySub: "Pet-friendly rentals",
  },
  {
    getawayTitle: "Bodega Bay",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Cambria",
    getawaySub: "Beachfont rentals",
  },
  {
    getawayTitle: "Cayucos",
    getawaySub: "Vacation rentals",
  },
  {
    getawayTitle: "Huntington Beach",
    getawaySub: "Apartment rentals",
  },
];
const unique = [
  {
    getawayTitle: "Cabins",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Treehouse",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Glamping",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Tiny Houses",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Beach Houses",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Campers and RVs",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Lakehouses",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Yurt Rentals",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Castle Rentals",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Houseboats",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Holiday Caravans",
    getawaySub: "United Kingdom",
  },
  {
    getawayTitle: "Private Island Rentals",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Farm Houses",
    getawaySub: "United States",
  },
  {
    getawayTitle: "Farm Cottages",
    getawaySub: "United Kingdom",
  },
  {
    getawayTitle: "Cabin Rentals",
    getawaySub: "Australia",
  },
  {
    getawayTitle: "Luxury Cabins",
    getawaySub: "United Kingdom",
  },
];
const categories = [
  {
    getawayTitle: "Amazing pools",
    getawaySub: "",
  },
  {
    getawayTitle: "Arctic",
    getawaySub: "",
  },
  {
    getawayTitle: "Camping",
    getawaySub: "",
  },
  {
    getawayTitle: "Campers",
    getawaySub: "",
  },
  {
    getawayTitle: "Castles",
    getawaySub: "",
  },
  {
    getawayTitle: "Containers",
    getawaySub: "",
  },
  {
    getawayTitle: "Countryside",
    getawaySub: "",
  },
  {
    getawayTitle: "Design",
    getawaySub: "",
  },
  {
    getawayTitle: "Earth homes",
    getawaySub: "",
  },
  {
    getawayTitle: "Farms",
    getawaySub: "",
  },
  {
    getawayTitle: "National parks",
    getawaySub: "",
  },
  {
    getawayTitle: "Vineyards",
    getawaySub: "",
  },
  {
    getawayTitle: "OMG!",
    getawaySub: "",
  },
  {
    getawayTitle: "Tiny homes",
    getawaySub: "",
  },
  {
    getawayTitle: "Towers",
    getawaySub: "",
  },
  {
    getawayTitle: "Windmills",
    getawaySub: "",
  },
];
const todo = [
  {
    getawayTitle: "London",
    getawaySub: "England",
  },
  {
    getawayTitle: "Pairs",
    getawaySub: "lie-de-France",
  },
  {
    getawayTitle: "New York",
    getawaySub: "New York",
  },
  {
    getawayTitle: "Barcelona",
    getawaySub: "Catalonia",
  },
  {
    getawayTitle: "Istanbul",
    getawaySub: "Istanbul",
  },
  {
    getawayTitle: "Bali",
    getawaySub: "Indonesia",
  },
  {
    getawayTitle: "Amsterdam",
    getawaySub: "North Holland",
  },
  {
    getawayTitle: "Miami",
    getawaySub: "Florida",
  },
  {
    getawayTitle: "Madrid",
    getawaySub: "Community of madrid",
  },
  {
    getawayTitle: "Los Angeles",
    getawaySub: "California",
  },
  {
    getawayTitle: "Rome",
    getawaySub: "Lazio",
  },
  {
    getawayTitle: "Lisbon",
    getawaySub: "Lisbon",
  },
  {
    getawayTitle: "Tokyo",
    getawaySub: "Tokyo",
  },
  {
    getawayTitle: "Vienna",
    getawaySub: "Vienna",
  },
  {
    getawayTitle: "Athens",
    getawaySub: "Greece",
  },
  {
    getawayTitle: "Prague",
    getawaySub: "Czechia",
  },
  {
    getawayTitle: "Orlando",
    getawaySub: "Florida",
  },
];
const friendly = [
  {
    getawayTitle: "Palm Beach County",
    getawaySub: "Florida",
  },
  {
    getawayTitle: "Atlanta Metro",
    getawaySub: "Georgia",
  },
  {
    getawayTitle: "Augusta",
    getawaySub: "Georgia",
  },
  {
    getawayTitle: "Austin metro",
    getawaySub: "Texas",
  },
  {
    getawayTitle: "Boston Metro",
    getawaySub: "Massachusetts",
  },
  {
    getawayTitle: "Charlotte",
    getawaySub: "North Carolina",
  },
  {
    getawayTitle: "Columbus",
    getawaySub: "Ohio",
  },
  {
    getawayTitle: "Dallas",
    getawaySub: "Texas",
  },
  {
    getawayTitle: "Denver",
    getawaySub: "Colorado",
  },
  {
    getawayTitle: "Gainesville",
    getawaySub: "Florida",
  },
  {
    getawayTitle: "Houston Metro",
    getawaySub: "Texas",
  },
  {
    getawayTitle: "Indianapolis",
    getawaySub: "Indiana",
  },
  {
    getawayTitle: "Jacksonville",
    getawaySub: "Florida",
  },
  {
    getawayTitle: "Los Angeles",
    getawaySub: "California",
  },
  {
    getawayTitle: "Miami",
    getawaySub: "Florida",
  },
  {
    getawayTitle: "Minnetonka",
    getawaySub: "Minnesota",
  },
  {
    getawayTitle: "newport Beach",
    getawaySub: "California",
  },
];
