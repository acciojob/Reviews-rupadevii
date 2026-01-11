import React, { useState } from 'react'
import { reviews } from '../reviews';

export default function Review() {
    

    const [currIndex, setCurrIndex] = useState(0);

    const review = reviews[currIndex]

    function handlePrevious(){
        setCurrIndex((prev) => prev === 0 ? reviews.length - 1 : (prev - 1) % reviews.length)
    }

    function handleNext(){
        setCurrIndex((prev) => (prev + 1) % reviews.length)
    }

    function generateRandom(){
        const random = Math.floor(Math.random() * reviews.length);
        setCurrIndex(random)
    }

  return (
    <div className='review'>
        <h4 className='author' id="author-id">{review.name}</h4>
        <p className='job'>{review.job}</p>
        <p className='text'>{review.text}</p>
        <img className='person-img' src={review.image} alt={review.name}/>
        <div>
            <button className='prev-btn' onClick={handlePrevious}>Prev</button>
            <button className='next-btn' onClick={handleNext}>Next</button>
            <button className='random-btn' onClick={generateRandom}>surprise me</button>
        </div>
    </div>
  )
}
