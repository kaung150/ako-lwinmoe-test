const Comment = ({ comment }) => {
  return (
    <div>
      <div className="mb-10  ">
        <div className="flex gap-3">
          <img src="/profile.webp" alt="" className="w-12 rounded-full h-12" />

          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="text-yellow-200 text-lg">{comment.username}</p>
              <span>{comment.createdAt}</span>
            </div>

            <p>{comment.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
