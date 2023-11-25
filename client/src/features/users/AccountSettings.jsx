import {
  CardGiftcard,
  Description,
  Leaderboard,
  Payments,
  RecentActors,
  RvHookup,
  Shield,
  ToggleOn,
  Visibility,
  VolumeUp,
} from "@mui/icons-material";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AccountSettings = () => {
  const { email } = useAuth();
  const cards = [
    {
      Icon: RecentActors,
      title: "Personal info",
      description: "Provide personal details and how we can reach you",
    },
    {
      Icon: Shield,
      title: "Login & security",
      description: "Update your password and secure your account",
    },
    {
      Icon: Payments,
      title: "Payments & payouts",
      description: "Review payments, payouts,coupons, and gift cards",
    },
    {
      Icon: Description,
      title: "Taxes",
      description: "Manage taxpayer information and tax documents",
    },
    {
      Icon: VolumeUp,
      title: "Notifications",
      description:
        "Choose notifications preferences and how you want to be contacted",
    },
    {
      Icon: Visibility,
      title: "Privacy & sharing",
      description:
        "Manage your personal data, connected services, and data sharing settings",
    },
    {
      Icon: ToggleOn,
      title: "Global preferences",
      description: "Set your default language, currency, and time zone",
    },
    {
      Icon: RvHookup,
      title: "Travel for work",
      description: "Add a work email business trip benefits",
    },
    {
      Icon: Leaderboard,
      title: "Professional hosting tools",
      description:
        "Get professional tools if you manage several properties of Airbnb",
    },
    {
      Icon: CardGiftcard,
      title: "Referral credit & coupon",
      description: "You have $0 referral credits and coupon. Learn more",
    },
  ];
  return (
    <div className="text-center text-black">
      <div className="p-8 mx-96 text-left">
        <h2 className="font-thin">Account</h2>
        <p>
          {email}
          <Link className="font-semibold underline">&nbsp;Go to profile</Link>
        </p>
      </div>
      <div className="p-8 mx-96 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {cards?.map((card) => {
          return (
            <div
              key={nanoid()}
              className="p-4 text-left rounded-xl border shadow-xl"
            >
              <card.Icon className="my-4 !text-4xl" />
              <h6>{card.title}</h6>
              <p className="text-gray-500">{card.description}</p>
            </div>
          );
        })}
      </div>
      <p> Need to deactivate your account? </p>
      <span> Take care of that now </span>
    </div>
  );
};

export default AccountSettings;
