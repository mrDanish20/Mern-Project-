import React from 'react';
import Slider from 'react-slick';
import './CustomersReview.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Alice Johnson',
    date: 'May 1, 2024',
    comment: 'The ambiance was stunning and the staff was incredibly friendly. I felt pampered!',
    rating: 5,
  },
  {
    name: 'Mark Smith',
    date: 'April 18, 2024',
    comment: 'Perfect location and excellent breakfast. Would definitely stay again!',
    rating: 4,
  },
  {
    name: 'Emily Clark',
    date: 'March 30, 2024',
    comment: 'Great rooms with amazing views. A few small hiccups, but overall great.',
    rating: 4,
  },
  {
    name: 'James Brown',
    date: 'February 12, 2024',
    comment: 'Wonderful place to relax and unwind. Clean, modern, and quiet.',
    rating: 5,
  },
];

export default function CustomersReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="review-section">
      <h2>
        What <em>Customers Say</em>
      </h2>
      <p className="subtitle">
        Real experiences. Genuine feedback. Trusted reviews from our guests.
      </p>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-card-inner">
              <p className="comment">“{review.comment}”</p>
              <div className="reviewer-box">
                <div className="reviewer-details">
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
