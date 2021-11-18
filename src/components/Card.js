import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function Card() {
  return (
    <div className="card">
      <img
        className="profile-picture"
        src="../../images/profile.png"
        alt="profile picture"
      />

      <MainContent />

      <Footer />
    </div>
  );
}
