"use client";
import { useState, useEffect, useRef } from "react";
import usePosts from "../app/hooks/usePosts";
import { LikeHeart } from "./SVGs";
import "../app/globals.css"

const Post = () => {
  const { data, isLoading, error } = usePosts();
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerRef = useRef(null);
  const postsPerPage = 12;

  useEffect(() => {
    if (data) {
      setVisiblePosts(data.slice(0, postsPerPage));
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore && data?.length > visiblePosts.length) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visiblePosts, loadingMore]);

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const nextPosts = data.slice(0, (page + 1) * postsPerPage);
      setVisiblePosts(nextPosts);
      setPage(page + 1);
      setLoadingMore(false);
    }, 1000);
  };

  if (isLoading) return <p className="text-center">is loading...</p>;
  if (error) return <p className="text-center text-red-500">error</p>;

  return (
    <div className="mx-2 pt-2 flex flex-col gap-3">
      {visiblePosts.map((post) => (
        <div
          key={post.id}
          className="p-6 rounded-lg flex justify-between items-center shadow-md w-full max-w-2xl border"
        >
          <div className="flex gap-3 items-center">
            <img
              className="border border-[#d2d4d6] bg-white rounded-full shadow-lg b h-16 w-16 p-2"
              alt="profile"
              src="/images/woman.png"
            />
            <div>
              <h3 className="font-bold pb-2">title : {post.title}</h3>
              <p>discription : {post.body}</p>
            </div>
          </div>
          <LikeHeart />
        </div>
      ))}
      
      {loadingMore && (
        <div className="text-center py-4">
          Loading more posts...
        </div>
      )}

      <div ref={observerRef} style={{ height: "20px" }} />
    </div>
  );
};

export default Post;