import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  /* Any state or function that we want to pass in, can be provided as value. Right
  now, we have only 1 item */
  const [feedBack, setFeedBack] = useState([
    { id: 1, text: "This istem is from context", rating: 10 },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  // Here, we want to check if a particular item has the same id as that of the id was given.
  // If yes, then feedback.filter will return the array of all items that do not match with the given id.
  // and setFeedback will set the feedback to this new array.

  // Deleting Feedback
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };

  // Adding Feedback
  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedBack([newFeedback, ...feedBack]);
  };

  const updateFeedBack = (id, updatedItem) => {
    //console.log(id, updatedItem);
    setFeedBack(
      feedBack.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );

    setFeedBackEdit({
      item: {},
      edit: false,
    });
  };

  // Editing Feedback
  const editFeedBack = (item) => {
    setFeedBackEdit({
      item: item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
