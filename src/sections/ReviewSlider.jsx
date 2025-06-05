import React from 'react';
import Slider from 'react-slick';
import reviews from '../data/reviews.json';

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className='bg-dark-gosia pb-5'>
    <div className="container py-5">
      <h2 className="text-center text-white mb-5">What my Clients Say</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="card bg-green text-white shadow border-0 mx-12" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className="card-body text-center p-4">
                <p className="card-text fst-italic">"{review.review}"</p>
                <h5 className="card-title mb-0">{review.name}</h5>
                <small className="text-muted">{review.title}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default ReviewSlider;
