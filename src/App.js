import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
  // This is an app level state
  const [feedback, setFeedback] = useState(FeedbackData);

  // Here, we want to check if a particular item has the same id as that of the id was given.
  // If yes, then feedback.filter will return the array of all items that do not match with the given id.
  // and setFeedback will set the feedback to this new array.
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div>
        {/* In order to pass in the app level state to the feedback list */}
        <FeedbackList feedBack={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
