import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { AuthContex } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    phone: '',
    details: ''
  });

  const { user } = useContext(AuthContex);
  const axiosSecure = useAxiosSecure(); // Use the axios secure instance


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Review data to be sent to the backend
    const reviewData = {
      name: user?.displayName || 'Anonymous',
      email: user?.email,
      phone: formData.phone,
      details: formData.details,
      rating: rating,
    };

    try {
      // Post the review data using axiosSecure instance
      const response = await axiosSecure.post('/reviews', reviewData);
      console.log('Review Submitted Successfully:', response.data);
      navigate('/dashboard/greettings'); 
      toast.success('Review submitted successfully!');
      

    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-6">Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Name and Email are disabled because they're auto-filled */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name*</label>
          <input
            type="text"
            name="name"
            value={user?.displayName || ''}
            className="w-full p-2 border border-gray-300 rounded"
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email*</label>
          <input
            type="email"
            name="email"
            value={user?.email || ''}
            className="w-full p-2 border border-gray-300 rounded"
            disabled
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone*</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message*</label>
          <textarea
            name="details"
            placeholder="Write your message here"
            value={formData.details}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Rating Feature */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Rating*</label>
          <div className="flex space-x-2">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    className="hidden"
                    required
                  />
                  <FaStar
                    size={24}
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    className="cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
