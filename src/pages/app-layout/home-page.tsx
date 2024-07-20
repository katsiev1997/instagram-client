import { PostCard, SideBar } from "src/widgets";

function HomePage() {
  return (
    <div className="max-w-[1080px] w-full mx-auto">
      <div className="flex w-full justify-between">
        <div className="w-full min-w-[750px] flex flex-col gap-5">
          <PostCard
            caption="Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque"
            imageUrl="/post-image.png"
            likes={10}
            comments={5}
            username="shirleyromero"
          />
          <PostCard
            caption="Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque"
            imageUrl="/post-image.png"
            likes={10}
            comments={5}
            username="shirleyromero"
          />
          <PostCard
            caption="Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque"
            imageUrl="/post-image.png"
            likes={10}
            comments={5}
            username="shirleyromero"
          />
        </div>

        <SideBar />
      </div>
    </div>
  );
}

export default HomePage;
