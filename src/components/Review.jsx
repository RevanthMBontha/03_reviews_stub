import React, { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [canReadMore, setCanReadMore] = useState(true);

  const { name, job, image, text } = people[index];

  const handlePrev = () => {
    index > 0 ? setIndex(index - 1) : setIndex(people.length - 1);
    setCanReadMore(true);
  };

  const handleNext = () => {
    index < people.length - 1 ? setIndex(index + 1) : setIndex(0);
    setCanReadMore(true);
  };

  const handleRandom = () => {
    const newIndex = Math.floor(Math.random() * 4);
    newIndex === index ? handleRandom() : setIndex(newIndex);
    setCanReadMore(true);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">
        {canReadMore ? `${text.substring(0, 100)}...` : text}
        <button className="btn" onClick={() => setCanReadMore(!canReadMore)}>
          {canReadMore ? 'read more' : 'show less'}
        </button>
      </p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={handleRandom}>
          surprise me!
        </button>
      </div>
    </article>
  );
};

export default Review;
