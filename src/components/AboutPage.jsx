import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutPage() {
  return (
    <div className=""> 
        <Navbar/>
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-00 dark:text-gray-0 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-6 text-pink-600 animate-pulse">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are passionate about connecting readers to stories, ideas, and knowledge that inspire
            growth and innovation. Discover more about our journey and vision below.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div
            className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-4xl font-bold mb-4 text-pink-600">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To democratize access to books and empower readers through a seamless online platform.
              We believe in promoting literacy, education, and creativity for a brighter future.
            </p>
          </div>

          <div
            className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-4xl font-bold mb-4 text-pink-600">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the go-to destination for book lovers and authors, fostering a global
              community of knowledge-sharing, creativity, and inspiration.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "John Doe", role: "CEO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9WhDFX3nPk8JFC4ynQw3g8VGTrgSweYs3A&s", bio: "Visionary leader driving innovation." },
              { name: "Jane Smith", role: "CTO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg02zvsUOpiEeA9NQ-4tGt7fBBC2XbWvVTow&s", bio: "Tech enthusiast transforming ideas into reality." },
              { name: "Emily Johnson", role: "COO", image: "https://static.wixstatic.com/media/7d5b6a_97da9a8743424004a913cd207a2a812a~mv2.jpg/v1/fill/w_1200,h_1200,al_c,q_85/CEO-business-executive-professional-headshot.jpg", bio: "Operational excellence at its finest." },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transform hover:-translate-y-3 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full shadow-md mb-4"
                />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-sm text-pink-500">{member.role}</p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-16 bg-gradient-to-r from-pink-400 to-pink-900 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg">
          <h2 className="text-4xl font-extrabold text-center text-white mb-12">
            Our Achievements
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { number: "5M+", description: "Books Sold" },
              { number: "1M+", description: "Active Users" },
              { number: "50+", description: "Global Awards" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="text-center text-white transform hover:scale-110 transition-transform duration-300"
              >
                <h3 className="text-6xl font-bold">{achievement.number}</h3>
                <p className="text-lg mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
    <Footer/>
    </div>
  );
}

export default AboutPage;
