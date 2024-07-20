

export const UserCard = () => {
  return (
    <div className="flex justify-between items-center my-8 h-8">
      <div className="flex gap-3 items-center">
        <img src="/profile-s.png" alt="profile-s" />
        <div className="flex flex-col ">
          <span className="font-semibold">shirleyromero</span>
          <span className="text-gray">Followed by terylucas + 2 more</span>
        </div>
      </div>
      <button className="text-blue font-semibold">Follow</button>
    </div>
  );
};
