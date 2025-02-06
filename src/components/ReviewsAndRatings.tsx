'use client'
import React, { useState } from 'react';

const ReviewsAndRatings = () => {
  const [rating, setRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  // Initialize reviews with useState (restoring previous reviews)
  const [reviews, setReviews] = useState([
    {
      name: 'Ayaan Z.',
      review:
        "The furniture I bought from your store is exceptional. The solid wood finish and elegant design have completely transformed my living room. Highly recommend it to anyone looking for quality furniture!",
      rating: 5,
      date: 'August 14, 2024',
    },
    {
      name: 'John D.',
      review:
        "Great quality and fast delivery! The customer service was very helpful when I had questions about the order.",
      rating: 4,
      date: 'August 20, 2024',
    },
    {
      name: 'Bilal H.',
      review:
        "The attention to detail in their furniture is amazing. The comfort of the sofa I purchased is unmatched, and the materials used are clearly premium quality. Worth every penny!",
      rating: 5,
      date: 'March 22, 2024',
    },
    {
      name: 'Maria A.',
      review:
        "What stands out about this furniture store is not just the beautiful products, but the seamless shopping experience. The delivery was prompt, and the staff were very helpful during installation.",
      rating: 5,
      date: 'April 23, 2024',
    },
    {
      name: 'John D.',
      review:
        "I am thoroughly impressed with the dining set I bought. It's sturdy, looks elegant, and was easy to assemble. Very happy with my purchase!",
      rating: 5,
      date: 'January 15, 2025',
    },
    {
      name: 'Emma S.',
      review:
        "The bedroom set is perfect for my space! The quality is excellent, and the design fits my style perfectly. Highly recommend this store!",
      rating: 5,
      date: 'January 20, 2025',
    },
    {
      name: 'Raj P.',
      review:
        "This store has the best customer service. They helped me with every step of the purchase, and the sofa I bought is incredibly comfortable. Will definitely shop here again!",
      rating: 5,
      date: 'January 22, 2025',
    },
  ]);

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  const handleReviewChange = (e: any) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitReview = () => {
    if (newReview.name && newReview.review && newReview.rating) {
      const newReviewWithDate = {
        name: newReview.name,
        review: newReview.review,
        rating: newReview.rating,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
      setReviews((prevReviews) => [...prevReviews, newReviewWithDate]);
      setShowReviewForm(false);
      setNewReview({ name: '', review: '', rating: 0 });
    }
  };

  return (
    <div className="bg-white flex items-center justify-center px-4 py-6 sm:px-6 md:px-8 rounded-xl">
      <div className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 min-h-screen p-4 sm:p-6 md:p-8 shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
          Customer Reviews & Ratings
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <div className="flex text-yellow-500 justify-center sm:justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-lg sm:text-xl md:text-2xl ${
                  rating >= star ? 'text-yellow-300' : 'text-gray-200'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
          <p className="text-black text-sm sm:text-base md:text-lg text-center sm:text-left">
            {rating > 0
              ? `You rated this product ${rating} out of 5`
              : 'Click to rate this product'}
          </p>

          {/* Add Review Button */}
          <button
            onClick={handleAddReviewClick}
            className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm md:text-base"
          >
            Add Review
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <div className="mt-6 p-4 border-2 border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg sm:text-xl font-semibold">Add Your Review</h3>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleReviewChange}
                placeholder="Your Name"
                className="w-full p-2 mb-2 border border-gray-300 rounded-md text-sm md:text-base"
              />
              <textarea
                name="review"
                value={newReview.review}
                onChange={handleReviewChange}
                placeholder="Your Review"
                className="w-full p-2 mb-2 border border-gray-300 rounded-md text-sm md:text-base"
              />
              <div className="flex text-yellow-500 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() =>
                      setNewReview((prev) => ({ ...prev, rating: star }))
                    }
                    className={`cursor-pointer text-lg sm:text-xl md:text-2xl ${
                      newReview.rating >= star
                        ? 'text-blue-600'
                        : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button
                onClick={handleSubmitReview}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-500 text-sm md:text-base"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}

        <div className="mt-6">
          <p className="text-lg sm:text-xl font-semibold text-gray-900">Recent Reviews:</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    {review.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">{review.date}</p>
                </div>
                <div className="flex text-yellow-500 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`${
                        review.rating >= star
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;
