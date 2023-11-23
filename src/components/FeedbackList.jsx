import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedBack } = useContext(FeedbackContext);

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
        />
      ))}
    </div>
  );
}

export default FeedbackList;
