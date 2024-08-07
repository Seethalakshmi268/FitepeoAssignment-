import React from "react";

const feedbacks = [
  {
    name: "Jenny Wilson",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    avatar: "https://via.placeholder.com/40",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and the sauces are awesome.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.566 4.808a1 1 0 00.95.69h5.045c.969 0 1.371 1.24.588 1.81l-4.088 2.97a1 1 0 00-.364 1.118l1.566 4.808c.3.921-.755 1.688-1.539 1.118l-4.087-2.97a1 1 0 00-1.175 0l-4.087 2.97c-.783.57-1.838-.197-1.539-1.118l1.566-4.808a1 1 0 00-.364-1.118L2.29 10.235c-.783-.57-.38-1.81.588-1.81h5.045a1 1 0 00.95-.69l1.566-4.808z" />
        </svg>
      ))}
    </div>
  );
};

const FeedbackItem = ({ feedback }) => {
  return (
    <div className="flex items-start mb-4 w-full">
      <img
        src={feedback.avatar}
        alt={feedback.name}
        className="w-10 h-10 rounded-full mr-2"
      />
      <div className="text-white">
        <h3 className="font-semibold">{feedback.name}</h3>
        <StarRating rating={feedback.rating} />
        <p className="mt-2 text-gray-400">{feedback.feedback}</p>
      </div>
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className="bg-dark-purple mt-5 p-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4">
        Customer's Feedback
      </h2>
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index} feedback={feedback} />
      ))}
    </div>
  );
};

export default CustomerFeedback;
