import React from 'react';
import reel from "../assets/reel.mp4"
import banner from "../assets/banner.png"
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-[#F4F2EE] to-[#E8DED5] text-[#521C14] min-h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-16 p-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-playwrite font-bold text-[#7E513B]">
            Welcome to My World of Theater
          </h1>
          <p className="text-lg lg:text-xl text-[#654D3B] max-w-3xl leading-relaxed mx-auto">
            Hi! I'm <span className="font-semibold text-[#7E513B]">Vedant Mahajan</span>, a passionate theater artist dedicated to captivating audiences through expressive storytelling and immersive performances.
            With experience spanning drama, comedy, and experimental theater, I strive to make every role a masterpiece.
          </p>
        </div>

        {/* About Me Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:space-x-8">
          {/* Image */}
          <img
            src={banner}
            alt="Vedant Mahajan"
            className="rounded-lg w-64 h-80 lg:w-72 lg:h-96 object-cover shadow-lg"
          />
          {/* Text */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-[#7E513B]">About Me</h2>
            <p className="text-lg text-[#654D3B] leading-relaxed">
              As a theater artist, I bring characters to life through powerful acting, expressive storytelling,
              and a deep connection with the audience. Whether on stage or behind the scenes, my goal is to deliver unforgettable performances.
            </p>
            <button
              href="#about"
              onClick={() => navigate("/about")}
              className="inline-block bg-[#7E513B] text-white px-6 py-3 rounded-lg shadow hover:bg-[#521C14] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-semibold text-[#7E513B] mb-4">My Performances</h2>
          <div className="relative w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-full aspect-video"
              src={reel}
              title="Performance Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controlsList="nodownload"
            ></iframe>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/about")} className="text-2xl p-3 border bg-[#7E513B] text-white rounded-lg flex justify-center items-center mx-auto mb-3">
        Next
      </button>

    </div>
  );
};

export default Home;
