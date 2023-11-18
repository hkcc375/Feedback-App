import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
  // This is an app level state
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div>
        {/* In order to pass in the app level state to the feedback list */}
        <FeedbackList feedBack={feedback} />
      </div>
    </>
  );
}

export default App;
