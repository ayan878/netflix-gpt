import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-full h-screen md:w-screen aspect-w-16 aspect-h-9 md:pt-36 px-4 md:px-16 absolute top-0 left-0 text-white bg-gradient-to-r from-black flex items-center justify-start md:justify-center">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          {title}
        </h1>
        <p className="py-2 text-sm md:text-base w-full md:w-1/2 hidden md:block">
          {overview}
        </p>
        <div className="flex flex-wrap items-center">
          <button className="bg-white text-black p-2 px-6 text-sm md:p-4 md:px-16 md:text-base rounded-md my-2 md:my-0 md:mr-2 hover:bg-opacity-80">
            &#9655; Play
          </button>
          <button className="bg-gray-500 text-white p-2 px-6 text-sm md:p-4 md:px-16 md:text-base rounded-md my-2 md:my-0 md:ml-2 bg-opacity-50 hover:bg-opacity-80">
            &#9432; More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
