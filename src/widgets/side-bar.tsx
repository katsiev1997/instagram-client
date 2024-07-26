import { useSelector } from "react-redux";
import { selectUserData } from "src/entities/user";
import { UserCard } from "src/shared/components";

export const SideBar = () => {
  const userData = useSelector(selectUserData);
  return (
    <aside className="w-[400px] m-5">
      <div className="w-full flex justify-between items-center h-14">
        <div className="flex gap-3 items-center">
          <img src="/profile_avatar.png" alt="avatar" width={35} height={35}/>
          <div className="flex flex-col ">
            <span className="font-semibold text-sm">{userData?.username}</span>
            <span className="text-gray text-xs">{userData?.fullname}</span>
          </div>
        </div>
        <button className="text-blue font-semibold text-sm pt-1">Switch</button>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray font-medium">Suggestions For You</span>
        <span className="font-semibold cursor-pointer">See All</span>
      </div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <p className="text-gray text-xs mt-5 cursor-pointer">
        About · Press · API · Jobs · Privacy · Terms · Locations · Top Accounts ·
        Hashtags · Language ·
      </p>
    </aside>
  );
};
