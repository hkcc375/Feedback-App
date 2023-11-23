import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedBack } = useContext(FeedbackContext);
  // Calculate ratings average. Here we use reduce
  let average =
    feedBack.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBack.length;

  // Fixes the decimal to 1 place only.
  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedBack.length} Reviews</h4>
      <h4>Average Ratings : {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedbackStats;
