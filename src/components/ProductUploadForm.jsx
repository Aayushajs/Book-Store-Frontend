import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductUploadForm = ({ onProductUpload }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    title: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", formData.id);
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("title", formData.title);
    data.append("image", formData.image);

    try {
      const response = await axios.post("https://book-store-zan0.onrender.com/book/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product uploaded successfully!");
      onProductUpload(response.data.product);
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product.");
    }
  };

  return (
    <div> 
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Upload Books
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Book ID
              </label>
              <input
                id="id"
                name="id"
                type="number"
                value={formData.id}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
                placeholder="Enter Product ID"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Book Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
                placeholder="Enter Product Name"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
               Book Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                value={formData.price}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
                placeholder="Enter Price"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
                placeholder="Enter Category"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Book Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                onChange={handleFileChange}
                required
                className="block w-full px-3 py-2 border border-dashed border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-2xl transition-all duration-300"
          >
            Upload Book
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductUploadForm;
