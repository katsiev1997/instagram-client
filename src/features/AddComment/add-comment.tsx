

export const AddComment = () => {
  return (
    <div className="relative border-t border-border h-14 w-full mt-5">
      <img
        className="absolute top-4 left-3"
        src="/smile.svg"
        alt="smile"
      />
      <input
        className="w-full h-full pl-12 outline-none"
        type="text"
        placeholder="Add a comment"
      />
      <button className="absolute top-4 right-3 text-blue font-semibold">
        Post
      </button>
    </div>
  );
};
