import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Cycle Calendar',
    text: 'Mark your calendar with past cycle and let us do the rest!',
  },
  {
    title: 'Note your Vitals',
    text: 'Add your vitals (weight, height, Oxygen levels, pulse rate etc.) and access them easily.',
  },
  {
    title: 'Join the community',
    text: 'Talk about things that have stigma around them and break the myths.',
  },
  {
    title: 'Understand through blogs',
    text: 'Read the blogs specially curated for you and understand what you are going through.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Features specially curated for you.</h1>
      
    </div>
    
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;