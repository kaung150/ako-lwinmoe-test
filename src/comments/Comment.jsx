const Comment = ({ comment, replies }) => {
  return (
    <div>
      <div className="mb-10  ">
        <div className="flex gap-3">
          <img src="/profile.webp" alt="" className="w-9 rounded-full h-9" />

          <div className="flex flex-col gap-1 bg-slate-200 p-2">
            <div className="flex gap-3 ">
              <p className="text-blue-500 text-lg font-semibold">
                {comment.username}
              </p>
              <span className="text-sm">{comment.createdAt}</span>
            </div>

            <p>{comment.body}</p>

            {replies.lenght > 0 && (
              <div>
                {replies.map((reply) => (
                  <Comment comment={reply} key={reply.id} replies={[]} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
