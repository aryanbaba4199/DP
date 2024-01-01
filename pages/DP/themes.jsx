import React, { useState, useEffect } from "react";
import PostForm from "../Admin/postform";
import axios from "axios";
import Header from "../Home/header";
import { useSession } from "next-auth/react";
import {auth} from "../../utils/firebaseAuth";
function Posts() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  let useremail = "";
  if (session) {
    useremail = session.user.email;
  }

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/postHandler");
      if (response.status === 200) {
        const data = await response.data;
        setPosts(data);
      } else {
        console.log("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const deletePost = async (dID) => {
    try {
      const response = await axios.delete(`/api/postHandler?did=${dID}`);
      if (response.status === 200) {
        console.log("Post deleted successfully");
        fetchPosts();
      } else {
        console.log("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (post) => {
    try {
      const response = await axios.post("/api/postHandler", {
        post,
      });

      if (response.status === 200) {
        console.log("Post created successfully");
        fetchPosts();
      } else {
        console.log("Post creation failed");
      }
    } catch (err) {
      console.log("Error Caught:", err);
    }
  };

  const allowedEmails = [
    "aryanbaba4199@gmail.com",
    "dreamplanner4199@gmail.com",
    "an.rajdubey@gmail.com",
  ];

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className=" p-4">
        <div className="shadow-lg shadow-black text-white p-2 rounded-xl">
          {auth.currentUser.email==="aryanbaba4199@gmail.com" && (
            <>
              <h1 className="text-2xl font-bold mb-4 p-4 font-serif">Create a Post</h1>
              <PostForm onSubmit={handleSubmit}/>
            </>
          )}
        </div>
        <div className="flex flex-wrap">
          <h1 className="dream text-2xl font-bold mb-4 w-full p-2 my-5">Glimpse</h1>
          {posts.map((post) => (
            <div key={post._id} className=" w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              
              <img
                src={post.image}
                alt="Post"
                className="glimpse-pic w-48 h-48 object-cover mb-2 rounded"
              />
              <p className="heading flex justify-between items-center">
                <span className="text-green-100">{post.header}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                  alt="Delete"
                  className=" cursor-pointer w-1/12"
                  onClick={() => deletePost(post._id)}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
