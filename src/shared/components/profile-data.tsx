import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "src/entities/user";

export const ProfileData = () => {
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center relative w-full h-60 border-b border-border">
      <img
        className="rounded-full absolute left-32 top-10"
        src="/profile-photo.png"
        alt="profile photo"
        width={150}
        height={150}
      />
      <div className="h-full py-10">
        <div className="flex gap-8 items-center">
          <span className="text-4xl font-light">{userData?.username}</span>
          <button
            onClick={() => navigate("/profile-edit")}
            className="relative border border-border rounded px-3 py-1.5 max-w-32 w-full hover:border-blue font-semibold"
          >
            Edit Profile
            <img
              className="absolute -right-8 top-1.5"
              src="/gear.svg"
              alt="gear"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex items-center gap-10 my-5">
          <span className="text-base">
            <b className="text-lg font-semibold">0</b> posts
          </span>
          <span className="text-base">
            <b className="text-lg font-semibold">255</b> followers
          </span>
          <span className="text-base">
            <b className="text-lg font-semibold">500</b> following
          </span>
        </div>
        <h4 className="font-semibold text-lg">{userData?.fullname}</h4>
      </div>
    </div>
  );
};
