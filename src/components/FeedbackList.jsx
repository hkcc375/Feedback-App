import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedBack, handleDelete }) {
  // If there's no feedback, then do the following
  if (!feedBack || feedBack.length === 0) {
    return <p> No Feedback yet.. </p>;
  }

  return (
    <div className="feedback-list">
      {feedBack.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // We are passing a prop called handleDelete to FeedbackItem
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );

  return <div>FeedbackList</div>;
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
