import React from 'react';
import { format } from 'date-fns';
import "./experience.css";

const WorkExperience = ({ degree, institution, startDate, endDate, description }) => {

  const formattedStartDate = format(new Date(startDate), 'MMMM yyyy');
  const formattedEndDate = endDate ? format(new Date(endDate), 'MMMM yyyy') : null;

  return (
    <div >
      <h2 className="education-title">{degree}</h2>
      <p className="education-instituion-dates">
        {institution} &#x2022;  {formattedStartDate} - {formattedEndDate ? formattedEndDate : 'Present'}
      </p>
      <p className="education-description">{description}</p>
    </div>
  );
};

export default WorkExperience;