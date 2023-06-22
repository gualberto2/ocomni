import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [save, setSave] = useState("");
  const [loading, setLoading] = useState("");
  return (
    <div className="mt-20">
      {/* Submit Comment */}
      <h4 className="text-lg font-medium">Leave a comment</h4>
      <form action="">
        <div className="flex flex-col mt-2 ">
          <div className="flex flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Enter name here"
              value={name}
              className=" w-full rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent "
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter email here"
              value={email}
              className=" w-full rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Comment Here"
            value={comment}
            cols="30"
            rows="5"
            className="w-full mt-4 rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent "
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-2 p-2">
          <input type="checkbox" id="chk" className="mr-1" />
          <label htmlFor="chk" className="text-sm font-light text-gray-600">
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
