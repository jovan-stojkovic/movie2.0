import "../styles/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <p>Follow Us!</p>
          <div className="social-links">
            <Link to={"https://www.instagram.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/instagram.svg"
                alt="instagram"
              />
            </Link>
            <Link to={"https://www.twitter.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/twitter.svg"
                alt="twitter"
              />
            </Link>
            <Link to={"https://www.facebook.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/facebook.svg"
                alt="facebook"
              />
            </Link>
            <Link to={"https://www.youtube.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/youtube.svg"
                alt="youtube"
              />
            </Link>
            <Link to={"https://www.tiktok.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/tiktok.svg"
                alt="tiktok"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
