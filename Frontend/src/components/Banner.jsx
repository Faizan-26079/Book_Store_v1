import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Hello, welcome to <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Learn Something New Everyday!
            </span>
          </h1>
          <p className="text-md md:text-xl text-gray-600 dark:text-gray-300">
            Master web development, programming, and more with our curated resources and expert guidance.
            Start your journey towards becoming a pro today!
          </p>

          {/* Email Input */}
          <div className="relative max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-5 pr-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              Join
            </button>
          </div>

          <button className="btn btn-secondary mt-6 rounded-full shadow-md px-8 py-3 hover:scale-105 transition-transform duration-300">
            🚀 Get Started
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in">
          <img
            src={banner}
            alt="Learning Illustration"
            className="w-[90%] md:w-[550px] md:h-[460px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
