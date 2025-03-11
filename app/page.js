"use client";
import { useState } from "react";
import Post from "../components/Post";
import { LoginIcon } from "../components/SVGs";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LoginForm from "./login/page";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function Home() {
  const navigate = useRouter()
  const handleLogin = () => {
    setShowLogin(false)
    navigate.push('/login')

  } 
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="py-10 border m-2 rounded-xl">
      <div className="flex justify-between w-full px-4">
        <div>
          <LoginIcon onClick={handleLogin} />
          log in
        </div>
        <p className="italic">List Of All Posts</p>
        <div>
          <ThemeSwitcher />
          mode
        </div>
      </div>
      {showLogin && <LoginForm/>}
      <Post />
    </div>
  );
}
