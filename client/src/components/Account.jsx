import { Cancel, Train } from "@mui/icons-material";

const Account = () => {
  const cards = [
    {
      Icon: Train,
      title: "Personal info",
      description: "Provide personal details and how we can reach you",
    },
    {
      : Cancel,
      title: "Login & security",
      description: "Update your password and secure your account",
    },
    {
      Icon: Cancel,
      title: "Payments & payouts",
      description: "Review payments, payouts,coupons, and gift cards",
    },
    {
      Icon: Cancel,
      title: "Notifications",
      description:
        "Choose notifications preferences and how you want to be contacted",
    },
    {
      Icon: Cancel,
      title: "Privacy & sharing",
      description:
        "Manage your personal data, connected services, and data sharing settings",
    },
    {
      Icon: Cancel,
      title: "Global preferences",
      description: "Set your default language, currency, and time zone",
    },
    {
      Icon: Cancel,
      title: "Travel for work",
      description: "Add a work email business trip benefits",
    },
    {
      Icon: Cancel,
      title: "Professional hosting tools",
      description:
        "Get professional tools if you manage several properties of Airbnb",
    },
    {
      Icon: Cancel,
      title: "Referral credit & coupon",
      description: "You have $0 referral credits and coupon. Learn more",
    },
  ];
  return (
    <div className="text-center">
      <h4>Account</h4>
      <p>
        Xuan An (user)<span>Go to profile</span>
      </p>
      {cards?.map((card, index) => (
        <div key={index} className="w-[200px]">
          <p> {card.icon} </p>
          <h6>{card.title}</h6>
          <p>{card.description}</p>
        </div>
      ))}
      <p> Need to deactivate your account? </p>
      <span> Take care of that now </span>
    </div>
  );
};

export default Account;
