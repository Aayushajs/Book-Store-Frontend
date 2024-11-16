import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ContactPage() {
  return (
    <div> 
        <Navbar/>
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-100 dark:text-gray-200 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-pink-500">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you. Reach out to us, and we'll get back to you shortly!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/3 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Contact Details</h3>
            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Phone:</span> +1 123 456 7890
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Email:</span> contact@bookstore.com
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Address:</span> 123 Bookstore St., City, Country
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Aayushajs"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aayush-jain-00752430b"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/aayushajs/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default ContactPage;
