import React from "react";
import banner from "../../public/image.jpg";

function Banner() {
  return (
    <div className="relative max-w-screen-2xl mx-auto container md:px-20 px-4 ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-10 rounded-lg -z-10"></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0">
        {/* Text Section */}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-32 space-y-6 md:space-y-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight    text-white transition duration-300 ease-in-out hover:scale-105">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-600">new everyday!!!</span>
          </h1>
          <p className="text-base md:text-lg max-w-md leading-relaxed">
            Discover, explore, and expand your knowledge. Join us on a journey to unlock new opportunities and master skills that matter.
          </p>

          {/* Email Input */}
          <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg focus-within:ring-2 ring-pink-500 transition duration-300 ease-in-out transform hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 text-pink-500 opacity-80"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="w-full bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Button */}
          <button className="px-6 py-3 mt-4 bg-pink-600 text-white rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-transform transform hover:scale-105 focus:outline-none">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="order-1 w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 py-20">
          <img
            src={banner}
            className="rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 md:w-[550px] md:h-[460px]"
            alt="Learning Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
