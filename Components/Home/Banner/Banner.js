import React from 'react';

const Banner = () => {
	return (
    <section className="max-w-6xl mx-auto py-2 px-4 grid md:grid-cols-2 gap-4">
      <div className=" flex flex-col justify-center text-center lg:text-start mb-6 lg:mb-0">
        <h6>Best place to buy and sell digital products.</h6>
        <h1 className="text-4xl font-bold mb-3">
          <span className="relative">
            Professional{" "}
            <div className="absolute w-5/6 h-2 bg-green-600 bottom-1 left-4 rounded-tl-md -z-10"></div>
          </span>{" "}
          WordPress Themes & Website{" "}
          <span className="relative">
            Templates{" "}
            <div className="absolute w-5/6 h-2 bg-red-600 bottom-0 left-4 rounded-br-2xl -z-10"></div>
          </span>{" "}
          for any project.
        </h1>
        <p>
          Discover thousands of easy to customize themes, templates & CMS
          products, made by world-class developers.
        </p>
      </div>
      <div className="flex justify-center relative items-center">
        <div className="h-80 overflow-hidden absolute z-20 w-52 md:w-60 left-0 hover:z-40 skew-y-6 hover:skew-y-0 duration-300">
          <img
            className=""
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f5b8e161204661.63c12c688f43a.png"
            alt=""
          />
        </div>
        <div className="h-96 overflow-hidden w-52 md:w-60 z-30 shadow-lg ">
          <img
            className=""
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b333a152343487.631c60138c7b9.png"
            alt=""
          />
        </div>
        <div className="h-80 overflow-hidden absolute z-20 w-52 md:w-60 right-0 hover:z-40  -skew-y-6 hover:skew-y-0 duration-300">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/554c6f162959425.63ddeeda51f0d.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;