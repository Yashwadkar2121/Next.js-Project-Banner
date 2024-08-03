"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import BannerImageComp from "./BannerImageComp";

function EditBannerTemplate() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setImage(acceptedFiles[0]);
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("Limited Time Offer");
  const [description, setDescription] = useState(
    "Up to 50% off on selected item. Grab your now!"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log("Form submitted:", title, description, image);
  };

  return (
    <div className="border bg-white p-10 w-4/12">
      <div className="hidden">
        <BannerImageComp title={title} description={description} />
      </div>
      <div className="flex justify-between">
        <h3 className="text-xl opacity-70">Edit Banner</h3>
        <i className="fa-solid fa-x text-xl opacity-70"></i>
      </div>
      <div className="relative h-48 mt-5">
        {" "}
        <Image
          src="https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png"
          layout="fill"
          objectFit="contain"
          alt="Banner image"
        />
      </div>
      <div>
        <p>image Attribution :photo</p>
        <div className="flex">
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps({ type: "file" })} />
            {isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </p>
            )}
            {image && <img src={URL.createObjectURL(image)} alt="Image" />}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <div className="mt-5">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditBannerTemplate;
