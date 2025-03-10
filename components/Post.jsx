"use client";
import usePosts from "../app/hooks/usePosts";
import { LikeHeart } from "./SVGs";

const Post = () => {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p className="text-center">is loading...</p>;
  if (error) return <p className="text-center text-red-500">error</p>;

  return (
    <div className="w-full max-w-2xl">
      {data.map((post) => (
        <div
          key={post.id}
          className="p-6 m-4 rounded-lg bg-[#DDC3C3] dark:bg-gray-700 text-black dark:text-white flex justify-between items-center shadow-md"
        >
          <div className="flex gap-3 items-center">
            <img
              className="bg-white rounded-full h-16 w-16 p-2"
              alt="profile"
              src="/images/woman.png"
            />
            <div>
              <h3 className="font-bold">title : {post.title}</h3>
              <p>discription : {post.body}</p>
            </div>
          </div>
          <LikeHeart />
        </div>
      ))}
    </div>
  );
};

export default Post;
