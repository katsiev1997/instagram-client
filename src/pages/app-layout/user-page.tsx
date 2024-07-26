import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserData } from "src/shared/components";
import { getUserData } from "src/shared/utils/get-user-data";

// interface userData {
// 	id: 2,
// 	email: "user1test@mail.ru",
// 	username: "user1test",
// 	fullname: "user 1 test",
// 	profileImageUrl: null,
// 	posts: Post[],
// 	comments: Comment[],
// 	likes: Like[]
// }
function UserPage() {
  const params = useParams();
  const { username } = params;
  const [fullname, setFullname] = useState("");
  const [posts, setPosts] = useState([]);

  const getData = async (username: string) => {
    const data = await getUserData(username);
    setFullname(data.fullname);
    setPosts(data.posts);
  };

  useEffect(() => {
    document.title = `${username} - Instagram`;
    if (username) {
      getData(username);
    }
  });
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
  ];
  const divClass =
    "flex items-center gap-2 h-full hover:-translate-y-0.5 hover:border-t duration-300 transition-all hover:border-black cursor-pointer";
  return (
    <div className="max-w-[1080px] w-full mx-auto">
      <UserData
        profileImageUrl="/profile-photo.png"
        username={username || ""}
        fullname={fullname}
        following={122}
        posts={posts.length || 0}
        followers={54}
        followed
      />
      <div className="w-96 flex items-center gap-14 h-14 mx-auto">
        <div className={divClass}>
          <img src="/posts-icon.svg" alt="posts-icon" />
          <span className="uppercase font-semibold">posts</span>
        </div>
        <div className={divClass}>
          <img src="/saved-icon.svg" alt="saved-icon" />
          <span className="uppercase font-semibold">saved</span>
        </div>
        <div className={divClass}>
          <img src="/tagged-icon.svg" alt="tagged-icon" />
          <span className="uppercase font-semibold">tagged</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`img-${index}`}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default UserPage;
