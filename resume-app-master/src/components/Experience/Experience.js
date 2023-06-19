import React, { useEffect, useState } from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch("experience.json")
      .then((response) => response.json())
      .then((data) => {
        setExperienceData(data.experienceData);
      })
      .catch((error) => {
        console.error("Error fetching experience data:", error);
      });
  }, []);

  return (
    <div id="experience" className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            designation={experience.designation}
            statements={experience.statements}
            iconImages={experience.iconImages}
          />
        ))}
      </div>
    </div>
  );
}
