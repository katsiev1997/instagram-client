import { useSelector } from "react-redux";
import { selectUserData } from "src/entities/user";
import { UserCard } from "src/shared/components";

export const SideBar = () => {
  const userData = useSelector(selectUserData);
  return (
    <aside className="w-full min-w-72">
      <div className="flex justify-between items-center my-8">
        <img src="/profile_avatar.png" alt="avatar" />
        <div className="flex flex-col ">
          <span className="font-semibold">{userData?.username}</span>
          <span className="text-gray">{userData?.fullname}</span>
        </div>
        <button className="text-blue font-semibold">Switch</button>
      </div>
      <div className="flex justify-between">
        <span className="text-gray font-medium">Suggestions For You</span>
        <span className="font-semibold cursor-pointer">See All</span>
      </div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <p className="text-gray text-sm mt-5 cursor-pointer">
        About · Press · API · Jobs · Privacy · Terms · Locations · Top Accounts ·
        Hashtags · Language ·
      </p>
    </aside>
  );
};
