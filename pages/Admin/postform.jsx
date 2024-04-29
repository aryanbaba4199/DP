import React, { useState } from "react";
import axios from "axios";


function PostForm({setRes}) {
  
  const [image, setImage] = useState("");
  const [tempImageUrl, setTempImageURL] = useState("");
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  

  const handleImageChange = (e) => {
    const selectImage = e.target.files[0];

    if (selectImage) {
      const tempUrl = URL.createObjectURL(selectImage);
      setTempImageURL(tempUrl);
      setImage(selectImage);
      
    }
  };




  const handlePostSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', "dreamplanner4199");
      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dvhuttonp/image/upload`, formData
      )
      
      const climageUrl = cloudinaryResponse.data.secure_url;
      console.log(climageUrl);
      setImage(climageUrl); // Optionally set image state if needed
      const response = await axios.post("/api/postHandler", {
        imageUrl : cloudinaryResponse.data.secure_url, header, description
      });

      if (response.status === 200) {
        setRes('200')
        console.log("Post created successfully");
        
      } else {
        alert("Error");
        console.log("Post creation failed");
      }
    } catch (e) {
      console.error(e);
    }                                                                                                                              
  
                                                                                                                                
    setTempImageURL("")
    setImage("");
    setHeader("");
    setDescription("");
  };

  return (
    <>
    <div className="flex">
    <form
      onSubmit={handlePostSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md "
    >
      <div className="mb-6 flex flex-col  border border-black px-2">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-600"
        >
          Image{" "}
        </label>
        <input
          type="file"
          accept="image/*"
          className="px-2 text-black"
          onChange={handleImageChange}
          required
        />
      </div>
      <div className="mb-6 border border-black px-2">
        <label
          htmlFor="header"
          className="block text-sm font-medium text-gray-600"
        >
          Header :
        </label>
        <input
          type="text"
          id="header"
          value={header}
          className="px-2 text-black"
          onChange={(e) => setHeader(e.target.value)}
          placeholder="Enter Header"
          required
        />
      </div>
      <div className="mb-6 border border-black px-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          className="px-2 text-black"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          required
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          className="btn bg-black text-white px-8 p-1 rounded-lg"
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
    <div>
      {tempImageUrl &&(
        <img
          src={tempImageUrl}
          alt="Dream Planner"
          className="w-96 h-96"
        />
      )

      }
    </div>
    </div>
    </>
  );
}

export default PostForm;
