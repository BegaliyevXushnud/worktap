'use client';

import { useState, useEffect } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  useEffect(() => {
    // Optionally, you could fetch an initial rating from an API or use localStorage
    setRating(4); // This is just a placeholder value for now
  }, []);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => handleRating(star)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={star <= rating ? '#FBA457' : '#E0E0E0'}
          viewBox="0 0 20 20"
          className="cursor-pointer"
        >
          <path d="M10 15l-3.09 1.63 0.78-4.47L3 7.88l4.5-0.39L10 2l2.5 5.49 4.5 0.39-3.69 4.28 0.78 4.47L10 15z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
