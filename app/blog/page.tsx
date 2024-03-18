"use client";
import { useEffect, useState } from "react";
import BlogCard, { Blog } from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: "1",
      title: "title1 title1 title1 title1 title1 title1",
      description:
        "description 1 description 1 description 1 v description 1 description 1 description 1",
    },
    {
      id: "1",
      title: "title1 title1 title1 title1 title1 title1",
      description:
        "description 1 description 1 description 1 v description 1 description 1 description 1",
    },
  ]);
  useEffect(() => {
    // call API to get all blogs
  }, []);
  return (
    <div className="flex flex-col justify-center w-full px-3">
      <div className="h-[1px] w-full bg-slate-300"></div>
      {blogs?.map((blog) => {
        return (
          <div id={blog.id} onClick={(e) => {}}>
            <BlogCard blog={blog} />
            <div className="h-[1px] w-full bg-slate-300"></div>
          </div>
        );
      })}
    </div>
  );
}
