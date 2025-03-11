"use client";
import usePosts from "../app/hooks/usePosts";
import { LikeHeart } from "./SVGs";
import "../app/globals.css"

const Post = () => {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p className="text-center">is loading...</p>;
  if (error) return <p className="text-center text-red-500">error</p>;

  return (
    <div className="mx-2 pt-2 flex flex-col gap-3" >
      {data.map((post) => (
        <div
          key={post.id}
          className="p-6 rounded-lg flex justify-between items-center shadow-md w-full max-w-2xl border border"
        >
          <div className="flex gap-3 items-center">
            <img
              className="border border-[#d2d4d6] bg-white rounded-full shadow-lg b h-16 w-16 p-2"
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
