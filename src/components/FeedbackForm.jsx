import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

// First thing, we do here is that want to wrap the form in a card component
function FeedbackForm({ handleAdd }) {
  // Initally the input tag will have empty value. Nothing will be there.
  const [text, setText] = useState("");

  const [rating, setRating] = useState(10);
  // We want this to be true by default only when we type in 10 characters.
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedBack, feedBackEdit, updateFeedBack } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedBackEdit]);

  // Here we set the text to e.target.value whenever we type something in the form
  const handleTextChange = ({ target: { value } }) => {
    // 👈  get the value
    if (value === "") {
      setBtnDisabled(true);
      setMessage(null)

      // prettier-ignore
    } else if (value.trim().length < 10) {
      // 👈 check for less than 10
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = { text: text, rating: rating };
      // console.log(newFeedback);

      if (feedBackEdit.edit === true) {
        updateFeedBack(feedBackEdit.item.id, newFeedback);
      } else {
        addFeedBack(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review "
            value={text}
          />
          {/* We actually want to have a button component here, but for the time being, we use just a normal button*/}
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {/* This will show the message below the div element */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
