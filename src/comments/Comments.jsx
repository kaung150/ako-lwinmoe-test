import { useEffect } from "react";
import { useState } from "react";
import { getComments as getCommentsApi } from "../api";
import Comment from "./Comment";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  console.log(backendComments);

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div>
      <h3 className=" text-xl font-semibold mt-5 mb-3">Comments</h3>
      {rootComments.map((rootComment) => (
        <Comment
          key={rootComment.id}
          comment={rootComment}
          replies={getReplies(rootComment.id)}
        />
      ))}
    </div>
  );
};

export default Comments;
