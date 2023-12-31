import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100012698762104" target="_blank">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:jayakrishnapalla05@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/_jayakrishna__/" target="_blank">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;