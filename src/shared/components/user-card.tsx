

export const UserCard = () => {
  return (
    <div className="w-full flex justify-between items-center h-14">
      <div className="flex gap-3 items-center">
        <img src="/profile-s.png" alt="profile-s" />
        <div className="flex flex-col ">
          <span className="font-semibold text-sm">shirleyromero</span>
          <span className="text-gray text-xs">Followed by terylucas + 2 more</span>
        </div>
      </div>
      <button className="text-blue font-semibold text-sm pt-3">Follow</button>
    </div>
  );
};
