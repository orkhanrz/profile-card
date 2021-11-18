import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function MainContent() {
  return (
    <main className="info">
      <div className="info-main">
        <h1 className="name">Laura Smith</h1>
        <h2 className="profession">Frontend Developer</h2>
        <h3 className="website">laurasmith.website</h3>
        <button className="email-btn btn">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Email
        </button>
        <button className="linkedin-btn btn">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          LinkedIn
        </button>
      </div>
      <i class="fab fa-twitter"></i>
      <div className="info-about">
        <h1 className="about_header">About</h1>
        <p className="about_paragraph">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1 className="about_header">Interests</h1>
        <p className="about_paragraph">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}
