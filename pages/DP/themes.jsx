import React, { useState, useEffect } from "react";
import PostForm from "../Admin/postform";
import axios from "axios";
import Header from "../Home/header";


import {auth} from "../../utils/firebaseAuth";
function Posts() {

  const [posts, setPosts] = useState([]);

  

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

 console.log("email", auth.currentUser);

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className=" p-4">
        <div className="shadow-lg shadow-black text-white p-2 rounded-xl">
          {auth?.currentUser?.email!=="aryanbaba4199@gmail.com" || "dreamplanner4199@gmail.com" && (
            <>
              <h1 className="text-2xl font-bold mb-4 p-4 font-serif text-black text-center">Create a Post</h1>
              <PostForm onSubmit={handleSubmit}/>
            </>
          )}
        </div>
        <div className="flex flex-wrap">
        
          <h1 className="dream font-bold mb-4 w-full p-2 my-5 text-center text-2xl font-serif text-purple-900">Glimpse</h1>
         
          {posts.map((post) => (
            <div key={post._id} className="md:flex grid justify-evenly ">
              
              <img
                src={post.image}
                alt="Post"
                className="w-96 h-96 rounded-md "
              />
              <p className="heading flex justify-between items-center">
                <span className="text-green-100">{post.header}</span>
                {
                  auth?.currentUser?.email==="aryanbaba4199@gmail.com" &&
                  <img
                  src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                  alt="Delete"
                  className=" cursor-pointer w-1/12"
                 
                  onClick={() => deletePost(post._id)}
                />
                }
                
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
