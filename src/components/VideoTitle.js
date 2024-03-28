import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-36 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-16 text-lg rounded-md hover:bg-opacity-80">
          &#9655; Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-16 text-lg  bg-opacity-50 rounded-md">
          &#9432; More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;