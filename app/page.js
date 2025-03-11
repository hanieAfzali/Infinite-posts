"use client";
import { useState } from "react";
import Post from "../components/Post";
import { LoginIcon } from "../components/SVGs";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="py-10 border m-2 rounded-xl">
      <div className="flex justify-between w-full px-4">
        <div>
          <LoginIcon onClick={() => setShowLogin(true)} />
          log in
        </div>
        <p className="italic">List Of All Posts</p>
        <div>
          <ThemeSwitcher />
          mode
        </div>
      </div>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      <Post />
    </div>
  );
}
