import React from "react";

function Cards({ item }) {
  // Cloudinary image URLs will already have full paths
  const imageURL = item.image;

  return (
    <div className="mt-4 my-3 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="card w-full sm:w-80 md:w-96 lg:w-80 xl:w-72 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border mx-auto">
        <figure className="py-5">
          <img
            src={imageURL}
            alt={item.name || "Product Image"}
            className="w-full h-48 object-cover rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center text-sm sm:text-lg md:text-xl">
            {item.name}
            <div className="badge badge-secondary ml-2 text-xs sm:text-sm">
              {item.category}
            </div>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center mt-2">
            {item.title}
          </p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline text-xs sm:text-sm md:text-base">
              ${item.price}
            </div>
            <div className="cursor-pointer px-3 py-1 text-xs sm:text-sm rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
