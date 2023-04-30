import React, { useState } from "react";

const FeedbackForm = () => {
  const [score, setScore] = useState("10");

  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(" ");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div>
            <label>Score: {score} </label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
