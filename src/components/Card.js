import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        className="profile-picture"
        src="../../images/profile.png"
        alt="profile picture"
      />

      <main className="info">
        <div className="info-main">
          <h1 className="name">Laura Smith</h1>
          <h2 className="profession">Frontend Developer</h2>
          <h3 className="website">laurasmith.website</h3>
          <button className="email-btn btn">Email</button>
          <button className="linkedin-btn btn">LinkedIn</button>
        </div>

        <div className="info-about">
          <h1 className="about_header">About</h1>
          <p className="about_paragraph">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h1 className="about_header">Interests</h1>
          <p className="about_paragraph">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </main>

      <footer>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
      </footer>
    </div>
  );
}
