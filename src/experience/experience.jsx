import React, { useState, useEffect } from "react";
import "./experience.css";
import { database } from '../firebase'
import { ref, onValue } from "firebase/database";
import WorkExperience from "./work";
import Education from "./education";

export default function Experience() {
  
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const workRef = ref(database, 'work');
    const educationRef = ref(database, 'education');

    const sortByEndDate = (a, b) => {
      const dateA = a.endDate ? new Date(a.endDate) : new Date();
      const dateB = b.endDate ? new Date(b.endDate) : new Date();
      return dateB - dateA;
    };

    onValue(workRef, (snapshot) => {
      const workData = snapshot.val();
      const sortedWorkData = workData.sort(sortByEndDate);
      setWork(sortedWorkData);
    });

    onValue(educationRef, (snapshot) => {
      const educationData = snapshot.val();
      const sortedEducationData = educationData.sort(sortByEndDate);
      setEducation(sortedEducationData);
    });
  }, []);

  return (
    <div className="experience">
      
      <div className="education-container">
        <div className="education-header">
          <h2>Education</h2>
        </div>
        <div className="education-experience">
          {education.map((experience, index) => (
            <Education
              key={index}
              degree={experience.degree}
              institution={experience.institution}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="work-container">
        <div className="work-header">
          <h2>Work</h2>
        </div>
        <div className="work-experience">
          {work.map((experience, index) => (
            <WorkExperience
              key={index}
              title={experience.title}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
            />
          ))}

        </div>
      </div>
  
    </div>
    
  );
}

