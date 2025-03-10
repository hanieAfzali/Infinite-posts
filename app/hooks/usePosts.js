"use client";

import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
    if (!res.ok) throw new Error("have problem in fetch data")
    return res.json();
}
 
export default function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
};