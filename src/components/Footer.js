import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookSquare,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTwitter} className="footer_icon" />
      <FontAwesomeIcon icon={faFacebookSquare} className="footer_icon" />
      <FontAwesomeIcon icon={faInstagram} className="footer_icon" />
      <FontAwesomeIcon icon={faGithub} className="footer_icon" />
    </footer>
  );
}
