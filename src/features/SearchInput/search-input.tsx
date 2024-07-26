import { useNavigate } from "react-router-dom";
import { useUserSearch } from "src/shared/hooks/use-user-search";

export const SearchInput = () => {
  const {
    username,
    setUsername,
    users,
    isFocused,
    handleFocus,
    handleBlur,
    handleUserSelect,
  } = useUserSearch();

  const navigate = useNavigate();

 

  return (
    <div className="relative">
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="py-4 pr-3 pl-7 w-56 h-7 border border-border rounded outline-none focus:w-96 focus:border-blue transition-all duration-300"
        placeholder="Search"
        type="text"
      />
      <img
        className="absolute top-2.5 left-2 w-4 h-4"
        src="/search.svg"
        alt="search"
      />
      {isFocused && username && users.length > 0 && (
        <div className="absolute top-10 z-10 bg-[#fff] w-96 rounded-lg border border-border py-2 ">
          {users.map((user) => (
            <div
              key={user.id}
              onMouseDown={() => handleUserSelect(user.username, navigate)}
              className="hover:bg-blue hover:bg-opacity-10 cursor-pointer pl-3 h-10 flex items-center gap-3"
            >
              {user.profileImageUrl && (
                <img
                  src={user.profileImageUrl}
                  alt="avatar"
                  width={40}
                  height={40}
                />
              )}
              <img src="/profile-s.png" alt="profile-s" />
              <p className="font-semibold">{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
