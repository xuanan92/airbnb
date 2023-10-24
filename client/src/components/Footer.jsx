import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
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
    <div className="m-auto w-full bg-gray-100">
      {/* <Inspiration for future getaways /> */}
      {/* <Tabs /> */}
      {/* <Tabs sub /> */}
      <div className="py-8 text-center bg-white">
        <h4 className="py-4">Continue exploring tiny homes</h4>
        <button
          type="button"
          className="py-2 px-4 font-bold text-white bg-black rounded-lg"
        >
          Show more
        </button>
      </div>
      <div className="py-8 px-40">
        <h3 className="font-medium text-black">
          Inspiration for future getaways
        </h3>
        <div className="flex gap-4 border-b border-b-gray-300">
          {/* TODO: <>@@() &0& #0# =add when click on below button show underline by css= */}
          <button
            type="button"
            className="py-2"
            id="popular"
            onClick={handleClick}
          >
            Popular
          </button>
          <button
            type="button"
            className="py-2"
            id="arts"
            onClick={handleClick}
          >
            Arts & culture
          </button>
          <button
            type="button"
            className="py-2"
            id="outdoors"
            onClick={handleClick}
          >
            Outdoors
          </button>
          <button
            type="button"
            className="py-2"
            id="mountains"
            onClick={handleClick}
          >
            Mountains
          </button>
          <button
            type="button"
            className="py-2"
            id="beach"
            onClick={handleClick}
          >
            Beach
          </button>
          <button
            type="button"
            className="py-2"
            id="unique"
            onClick={handleClick}
          >
            Unique stays
          </button>
          <button
            type="button"
            className="py-2"
            id="categories"
            onClick={handleClick}
          >
            Categories
          </button>
          <button
            type="button"
            className="py-2"
            id="todo"
            onClick={handleClick}
          >
            Things to do
          </button>
          <button
            type="button"
            className="py-2"
            id="friendly"
            onClick={handleClick}
          >
            Airbnb-friendly apartments
          </button>
        </div>
        <div className="grid grid-cols-6 gap-x-2 gap-y-4 pt-8">
          {/* TODO: <>@@() &0& #0# =display 17 link items get aways and 1 show more= */}
          {content}
        </div>
      </div>
      <hr className="border-t border-t-gray-300" />
      <div className="grid grid-cols-3 py-8 px-40">
        <div className="flex flex-col gap-2">
          <h6>Support</h6>
          <Link>Help Center</Link>
          <Link>Air Cover</Link>
          <Link>Anti-discrimination</Link>
          <Link>Disability support</Link>
          <Link>Cancellation options</Link>
          <Link>Report neighborhood concerns</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h6>Hosting</h6>
          <Link>Airbnb your home</Link>
          <Link>AirCover for Hosts</Link>
          <Link>Hosting resources</Link>
          <Link>Community forum</Link>
          <Link>Hosting responsibly</Link>
          <Link>Airbnb-friendly apartments</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h6>Airbnb</h6>
          <Link>Newsroom</Link>
          <Link>New features</Link>
          <Link>Careers</Link>
          <Link>Investors</Link>
          <Link>Gift cards</Link>
          <Link>Airbnb.org emergency stays</Link>
        </div>
      </div>
      <div className="px-40">
        <hr className="border-t border-t-gray-300" />
        <div className="flex justify-between py-4">
          <div className="flex gap-4">
            <p>@2023 Airbnb,Inc.</p>
            <ul className="flex gap-4">
              <li>Terms</li>
              <li>Sitemap</li>
              <li>Privacy</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <h4>English</h4>
            <h4>USD</h4>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
            <h4>Instagram</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
// TODO: <A>@@() &0& #0# =add static web data=
const mountains = [
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
const beach = [
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
const unique = [
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
const categories = [
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
const todo = [
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
const friendly = [
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
