import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// Here the handleDelete is caught and we execute handleDelete
function FeedbackItem({ item }) {
  const { deleteFeedBack, editFeedBack } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <button onClick={() => editFeedBack(item)} className="edit">
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
