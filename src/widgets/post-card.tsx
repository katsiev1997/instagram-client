import { AddComment } from "src/features";
import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  username: string;
  likes: number;
  comments: number;
  caption: string;
};

export const PostCard = ({
  imageUrl,
  username,
  likes,
  comments,
  caption,
}: Props) => {
  return (
    <article className="max-w-2xl w-full bg-[#fff] border border-border rounded-lg m-3">
      <div className="w-full flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <img src="/avatar.png" alt="avatar" width={40} height={40} />
          <Link to={`/${username}`} className="text-lg font-semibold">
            {username}
          </Link>
        </div>
        <img
          className="cursor-pointer"
          src="/more.svg"
          alt="more"
          width={35}
          height={20}
        />
      </div>
      <img src={imageUrl} alt="post-image" width={672} height={576} />
      <div className="px-5 flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <img src="/like.svg" alt="like" width={24} height={24} />
          <img src="/comment.svg" alt="comment" width={24} height={24} />
          <img src="/share.svg" alt="share" width={24} height={24} />
        </div>
        <img src="/save.svg" alt="save" width={24} height={24} />
      </div>
      <div className="px-5">
        <span className="font-semibold">{likes} likes</span>
        <div className="flex">
          <span className="font-semibold">{username}</span>
          <p>{caption}</p>
          <span className="text-gray">...more</span>
        </div>
        <span className="text-gray">View all {comments} comments</span>
        <span className="text-gray font-light uppercase">1 hour ago</span>
        <AddComment />
      </div>
    </article>
  );
};
