import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Curious about stuff? <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="June 10, 2022" text="Should sanitary pads be replaced by tampons and menstrual cups?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="March 26, 2022" text="PCOS and PCODs! Are you suffering?" />
        <Article imgUrl={blog03} date="April 01, 2022" text="Can't go to mandir while on your periods?" />
        <Article imgUrl={blog04} date="May 23, 2022" text="Can you have sex while on your periods?" />
        <Article imgUrl={blog05} date="June 05, 2022" text="What does irregular cycle imply?" />
      </div>
    </div>
  </div>
);

export default Blog;