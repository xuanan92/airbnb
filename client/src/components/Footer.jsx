import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="m-auto w-full bg-gray-100">
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
