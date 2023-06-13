import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [save, setSave] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <div>
      {/* Submit Comment */}
      <h2>Leave a comment</h2>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comment Here"
          value={comment}
          cols="30"
          rows="5"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div>
          <input type="checkbox" id="chk" />
          <label htmlFor="chk">
            By checking this box, I am acknowledging that I am following the{" "}
            <span>Terms and Conditions</span> for making a comment
          </label>
        </div>
      </form>
      {comments?.map((comment) => (
        <div key={comment.id}>
          {comment.name}, {comment.email}
        </div>
      ))}
    </div>
  );
};

export default Comments;
