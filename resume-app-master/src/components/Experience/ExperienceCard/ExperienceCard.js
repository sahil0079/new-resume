import React from "react";
import "./ExperienceCard.css";
import html from "../../../images/html.svg"
import react from "../../../images/react.svg"
import js from "../../../images/js.png"
import firebase from "../../../images/firebase.png"

export default function ExperienceCard({
  companyName,
  designation,
  statements,
  iconImages,
}) {
  const getIconImage = (iconName) => {
    switch (iconName) {
      case "html":
        return html;
      case "react":
        return react;
      case "js":
        return js;
      case "firebase":
        return firebase;
      default:
        return null;
    }
  };

  return (
    <div className="ex_card_container">
      <p className="ex_card_title">{companyName}</p>
      <p className="ex_card_subtitle">Designation: {designation}</p>

      {statements.map((value, index) => (
        <p className="ex_card_sentence" key={index}>
          {value}
        </p>
      ))}
      <p className="ex_card_tech_used_title">Tech Stack Used</p>
      <div className="ex_card_icon_images_container">
        {iconImages.map((iconName, index) => (
          <img key={index} src={getIconImage(iconName)} alt={iconName} />
        ))}
      </div>
    </div>
  );
}
