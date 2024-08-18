import React from 'react';
import { format } from 'date-fns';
import "./experience.css";

const WorkExperience = ({ title, company, startDate, endDate, description }) => {

  const formattedStartDate = format(new Date(startDate), 'MMMM yyyy');
  const formattedEndDate = endDate ? format(new Date(endDate), 'MMMM yyyy') : null;

  return (
    <div >
      <h2 className="work-title">{title}</h2>
      <p className="work-company-dates">
        {company} &#x2022;  {formattedStartDate} - {formattedEndDate ? formattedEndDate : 'Present'}
      </p>
      <p className="work-description">{description}</p>
    </div>
  );
};

export default WorkExperience;