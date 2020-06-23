import React from "react";
import heart from "../assets/static/heart.svg";
import "../assets/styles/components/footer.css";

export default () => (
  <footer className="footer">
    <p>
      Made with <img src={heart} alt="Heart icon" /> by Me!
    </p>
  </footer>
);
