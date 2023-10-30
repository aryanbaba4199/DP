import React, { useState, useEffect } from "react";
import PostForm from "../Admin/postform";

import axios from "axios";
import Header from "../Home/header"
import {useSession} from "next-auth/react"


function Posts() {
  const {data : session} = useSession();
  const [posts, setPosts] = useState([]);

  let useremail = "";
  if(session){
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


  //______________Deleteing Post ____________
  const deletePost = async (dID) => {
    try{
        const response = await axios.delete(`/api/postHandler?did=${dID}`);
        if(response.status===200){
            console.log("Post deleted successfully");
            fetchPosts();
        }
        else{
            console.log("Error deleting post");
        }

    }catch (error) {
        console.error("Error deleting post");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (post) => {
    try {
        const response = await axios.post("/api/postHandler", {
        post
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
    "an.rajdubey@gmail.com"
  ];

  return (
    <>
    <Header/>
        <div className="homeblank"></div>
      <div className="glimpseblank"></div>
      <div className="create-container">
        {session && allowedEmails.includes(useremail)  && (
          <>
            <h1>Create a Post</h1>
            <PostForm onSubmit={handleSubmit} />
          </>
        )}
      </div>
      <div className="glimpse-container">
        <h1 className="dream">Glimpse</h1>
        <div className="post-container">
          <div className="gpextrablank"></div>
          {posts.map((post) => (
            
            <div key={post._id} className="card3">
              
              <img src={post.image} alt="Post" className="glimpse-pic" />
              <p className="heading">{post.header}
              <img
                    src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                    className="delete-logo"
                    onClick={() =>deletePost(post._id)}
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