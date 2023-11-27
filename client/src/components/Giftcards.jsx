import { Link } from "react-router-dom";

export const Giftcards = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-16 mx-8 h-20">
        <div className="w-24">
          <img src="/imgs/Airbnblogo.svg.png" alt="" />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link className="" to="/gift">
            <button className="p-2 px-4 font-semibold text-black underline rounded-lg hover:bg-gray-200">
              Redeem
            </button>
          </Link>
          <button className="p-2 px-4 text-white bg-red-500 rounded-lg">
            Buy gift card
          </button>
        </div>
      </header>
      <div className="px-16 pb-8">
        <div className="flex flex-col py-20 mx-8 text-center">
          <h1 className="text-9xl text-black">
            Airbnb
            <br />
            gift cards
          </h1>
          <img
            src="https://a0.muscache.com/im/pictures/52bf16de-ba72-4de0-a114-f16bb2c5a6e1.jpg?im_w=720"
            alt=""
            className="pt-20 m-auto w-1/2 bg-no-repeat bg-contain bg-[url('https://a0.muscache.com/im/pictures/c95c71e6-1292-44c2-a5b5-e6fbbdd18433.jpg?im_w=720')]"
          />
        </div>
        <div className="flex flex-col gap-12 pt-0 text-center">
          <h2 className="text-6xl text-black text-semibold">
            Make someone&apos;s holiday
          </h2>
          <p className="m-auto w-1/2 text-xl">
            Give a getaway to remember with one of our seasonal gift cards.
            They&apos;re easy to give, easy to love, and never expire
          </p>
          <div className="flex flex-row gap-4 m-auto">
            <img
              src="https://a0.muscache.com/im/pictures/820af3e6-fc22-4aa5-8a6c-d74fe221e131.jpg?im_w=480"
              alt="card1"
            />
            <img
              src="https://a0.muscache.com/im/pictures/0457fc65-3728-4111-baba-05579c8f3fff.jpg?im_w=480"
              alt="card2"
            />
          </div>
          <hr className="my-8" />
          <div className="w-full gap-8 max-w-[1120px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] m-auto">
            <img
              src="https://a0.muscache.com/im/pictures/5a262127-6957-4e1e-b87d-df6674c07d7a.jpg?im_w=480"
              alt="card3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/c60c6c22-e390-49eb-afa3-68dc16715f5c.jpg?im_w=480"
              alt="card3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/b3275f8d-4341-4800-bdf2-04be20e9112d.jpg?im_w=480"
              alt="card3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/80c2a39d-9374-4df5-b5a8-651418b2769e.jpg?im_w=480"
              alt="card3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/1a0c67c8-4080-4f11-a010-f8fc19ae305d.jpg?im_w=480"
              alt="card3"
            />
            <img
              src="https://a0.muscache.com/im/pictures/adc7111a-c72f-43ad-8047-764cdb9c617e.jpg?im_w=480"
              alt="card3"
            />
          </div>
          <div className="flex items-center m-auto max-w-[1439px]">
            <img
              src="https://a0.muscache.com/im/pictures/ad4481c2-d06c-47a1-9de9-2d76c4c0c832.jpg?im_w=1440"
              alt="banner1"
            />
            {/* <img */}
            {/*   src=" https://a0.muscache.com/im/pictures/9196e84a-47e1-4fd2-8a6d-dc9face35440.jpg?im_w=1440 " */}
            {/*   alt="banner2" */}
            {/* /> */}
          </div>
        </div>
        <div className="flex flex-col m-auto text-black max-w-[1200px]">
          <div className="grid grid-cols-2 py-20">
            <h1 className="w-48">Corporate gift cards</h1>
            <div>
              <p className="text-2xl">
                Give your customers and employees the gift of travel
              </p>
              <Link className="text-xl font-semibold underline" to="/">
                Learn more
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h1 className="w-68">Freequently asked questions</h1>
              <p>For other questions visit our help center</p>
            </div>
            <div>
              <div>
                <h4>Are gift cards physical or digital? </h4>
                <p>
                  Gift cards bought on Airbnb.com are digital only. However,
                  physical gift cards are available at participating stores
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <h4>Where can I buy a physical gift card?</h4>
                <p>
                  You can buy a physical gift card at participating Target,
                  Walmart, Best Buy, CVS, Walgreens, Kroger, Safeway, and Whole
                  Foods store locations.
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <h4>What can gift cards be used for?</h4>
                <p>
                  Gift cards can be used for any stay, Experience, or Online
                  Experience on Airbnb
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <h4>Do gift cards expire?</h4>
                <p>
                  Once a gift card has been added to your Airbnb account, the
                  funds won&apos;t expire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Giftcards;
