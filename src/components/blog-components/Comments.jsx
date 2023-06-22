import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [save, setSave] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <div className="my-20">
      {/* Submit Comment */}
      <h4 className="text-lg font-medium">Leave a comment</h4>
      <form action="">
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Enter name here"
              value={name}
              className="bg-neutral-300 w-full rounded-md border-neutral-300 "
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter email here"
              value={email}
              className="bg-neutral-300 w-full rounded-md border-neutral-300 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Comment Here"
            value={comment}
            cols="30"
            rows="5"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
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
          <strong>
            <i>{comment.name}</i>
          </strong>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
