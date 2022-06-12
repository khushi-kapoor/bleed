import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Connect with women <br /> who feel the same way as you do!</h1>
      <p>Lets us speak to each other and discuss outspokenly whatever we feel like. Lets Chat and make everything familier and nothing private that people or many girls itself are shy to speak about.</p>
      <h4>Join the Community</h4>
    </div>
  </div>
);

export default Possibility;