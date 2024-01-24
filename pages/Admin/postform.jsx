import React, { useState } from "react";
import axios from "axios";

function PostForm({ onSubmit }) {
  const [image, setImage] = useState("");
  const [tempImageUrl, setTempImageURL] = useState("");
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const selectImage = e.target.files[0];
    console.log(selectImage);
    if (selectImage) {
      const tempUrl = URL.createObjectURL(selectImage);
      setTempImageURL(tempUrl);
      setImage(selectImage);
      
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', "dreamplanner4199");
      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dvhuttonp/image/upload`, formData
      )
      
        const imageUrl = cloudinaryResponse.data.secure_url;
        setImage(imageUrl);
        console.log(imageUrl);

    }catch(e){
      console.error(e);
    }
   
    const post = { image, header, description };
    console.log("Upload", post)
    onSubmit(post);
    setImage("");
    setHeader("");
    setDescription("");
  };

  return (
    <>
    <div className="flex">
    <form
      onSubmit={handleSubmit}
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
