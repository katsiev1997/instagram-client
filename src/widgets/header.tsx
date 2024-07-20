import { SearchInput } from "src/features";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b border-border h-14 flex justify-center">
      <div className="max-w-[1080px] w-full h-full flex items-center gap-3 justify-between px-5">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <div className="flex-1 max-w-[400px]">
          <SearchInput />
        </div>
        <nav className="flex gap-5 items-center">
          <Link to="/">
            <img src="/home.svg" alt="home"/>
          </Link>
          <Link to="/messenger">
            <img src="/direct.svg" alt="direct"/>
          </Link>
          <Link to="/add-post">
            <img src="/add_post.svg" alt="add_post"/>
          </Link>
          <Link to="/explore">
            <img src="/explore.svg" alt="explore"/>
          </Link>
          <Link to="/">
            <img src="/notifications.svg" alt="notifications" />
          </Link>
          <Link to="/profile">
            <img src="/profile-s.png" alt="profile-s"/>
          </Link>
        </nav>
      </div>
    </header>
  );
};
