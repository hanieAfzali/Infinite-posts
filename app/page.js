"use client";
import Post from "../components/Post";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="py-10 min-h-screen flex flex-col items-center bg-[#F1DFDF] dark:bg-[#5c5454] text-black dark:text-white">
      <ThemeSwitcher />
      <Post />
    </div>
  );
}
