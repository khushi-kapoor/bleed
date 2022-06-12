import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Keep Track" text="Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. 
      Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. 
      The menstrual blood is partly blood and partly tissue from inside the uterus.
      Don't forget your date, Register yourself and get mails on your upcoming periods." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Mark you Calendar</h1>
      <p>Keep track of your cycle!</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="When does your next cycle begin?" text="Log in your period dates once and receive notification about your next period and when are you ovulating!" />
      <Feature title="Feeling Grumpy?" text="You are probably going through PMS! PMS refers to the diverse range of physical and psychological symptoms that people experience before their menstrual period." />
      <Feature title="Pimples and Acne?" text="Just before your period starts, estrogen and progesterone levels drop. This can trigger your sebaceous glands to secrete more sebum. Too much can result in clogged pores and breakouts" />
    </div>
  </div>
);

export default WhatGPT3;