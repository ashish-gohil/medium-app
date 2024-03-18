"use client";

import { useEffect, useState } from "react";
interface BlogDetails {
  id: string;
  title: string;
  description: string;
  author: string;
}
export default function UserBlog({ params }: { params: { blogId: string } }) {
  const blogId = params.blogId;
  const [blogDetails, setBlogDetails] = useState<BlogDetails>();
  useEffect(() => {
    //api call for blog details
  }, []);
  return (
    <div className="flex justify-between md:flex-row flex-col">
      {/* Blog Section */}
      <div className="w-full md:w-3/5 bg-slate p-3">
        <h1 className="text-3xl font-bold mb-4">Blog Title</h1>
        <p className="text-xs text-gray-400">
          Published Date: <span className="font-light">March 18, 2024</span>
        </p>
        <p className="text-gray-500 mb-2">Blog Description </p>

        {/* Add more blog content here */}
      </div>

      {/* Author Section */}
      <div className="w-full md:w-2/5 bg-slate-darker p-3">
        <div className="flex items-center mb-4">
          <img
            src="author-logo.png"
            alt="Author Logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Author Name</h2>
            <p className="text-gray-500">Short Description</p>
          </div>
        </div>
        {/* Add more author details here */}
      </div>
    </div>
  );
}
