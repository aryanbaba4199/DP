import React, { useState, useEffect } from "react";
import PostForm from "../Admin/postform";
import axios from "axios";
import { Dialog } from "@mui/material";
import Header from "../Home/header";
import Image from "next/image";


import { auth } from "../../utils/firebaseAuth";
function Posts() {

  const [posts, setPosts] = useState([]);
  const [res, setRes] = useState("");
  



  console.log(posts);

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
  if(res.status === 200) {
    fetchPosts();
  }

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

 



  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <div className=" p-4">
        <div className="shadow-lg shadow-black text-white p-2 rounded-xl">
          {auth?.currentUser?.email !== "aryanbaba4199@gmail.com" || auth?.currentUser?.email !== "dreamplanner4199@gmail.com" && (
            <>
              <h1 className="text-2xl font-bold mb-4 p-4 font-serif text-black text-center">Create a Post</h1>
              <PostForm
                setRes={setRes}
              />
            </>
          )}

        </div>
        <div className="flex flex-wrap">

          <h1 className="dream font-bold mb-4 w-full p-2 my-5 text-center text-2xl font-serif text-purple-900">Glimpse</h1>

          {posts.map((post) => (
            <div key={post._id} className="grid md:grid-rows-3 grid-cols-1 items-center ">

              <div className="">
              <Image
                src={post.imageUrl}
                width={1000}
                height={1000}
                className="w-96 h-96 rounded-md m-4"
                alt="Post"
             
              />
              <div className="flex justify-center items-center">
              <p className="heading flex justify-between items-center">
                <span className="text-black">{post.header} </span>
                <span className="text-black ml-2">{`(${post.description})`}</span>
                {
                  auth?.currentUser?.email === "aryanbaba4199@gmail.com" &&
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                    alt="Delete"
                    className=" cursor-pointer w-1/12 text-end"

                    onClick={() => deletePost(post._id)}
                  />
                }

              </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={res === "200"}>
        <div className='flex flex-col justify-center items-center px-4 bg-gray-700 text-white'>
          <p className='bg-slate-900 text-white px-4 my-4 rounded-md text-xl '>Successful</p>
          <p className=''>Photo Added Successfully...</p>
          <button onClick={()=>setRes("")} className="btn bg-green-600 px-4 rounded-md text-white my-4 mb-6">Ok</button>
        </div>
      </Dialog>
      
    </>
  );
}

export default Posts;
