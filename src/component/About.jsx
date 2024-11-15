import React from 'react';
import me from "../assets/me.png"
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-[#F4F2EE] to-[#E8DED5] text-[#521C14] min-h-screen p-8">
      <div className="max-w-screen-lg mx-auto flex flex-col space-y-12">
        {/* Heading */}
        <h1 className="text-5xl font-playwrite font-bold text-[#7E513B] text-center">
          About Me
        </h1>
        <h3 className="text-2xl font-playwrite font-semibold text-[#7E513B] text-center">
          Vedant Mahajan
        </h3>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
          {/* Photo Section */}
          <div className="relative flex-shrink-0 mb-8 md:mb-0">
            <img
              src={me}
              alt="Vedant Mahajan - Theater Artist"
              className="rounded-lg w-64 h-80 lg:w-72 lg:h-96 object-cover shadow-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7E513B] to-[#521C14] opacity-30"></div>
          </div>

          {/* Description Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 flex-1">
            <p className="text-lg lg:text-xl leading-relaxed text-[#654D3B]">
              As a dedicated theater artist with <span className="font-semibold text-[#7E513B]">one year of experience</span>, I have performed on various prestigious stages, showcasing my skills and passion for the dramatic arts. 
              I’ve had the privilege to be part of productions like <span className="italic">Mahanatya</span>, participate in state-level drama competitions, and perform at renowned institutions like the 
              <span className="font-semibold text-[#7E513B]"> Centre for Cultural Resources and Training (CCRT)</span>. 
              My journey in theater continues to fuel my dedication to artistic expression and cultural engagement.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-[#654D3B]">
              Welcome! I am <span className="font-semibold text-[#7E513B]">Vedant Mahajan</span>, a passionate theater artist dedicated to bringing characters to life on stage. 
              Through captivating storytelling, expressive acting, and emotional depth, I aim to create unforgettable experiences that leave a lasting impact on the audience.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-[#654D3B]">
              My expertise spans <span className="font-semibold text-[#7E513B]">drama, comedy, and experimental theater</span>. I thrive in collaborating with directors, cast members, and event organizers to ensure every performance resonates with the audience and aligns with the vision of the production.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <span className="text-4xl text-[#7E513B] mb-4">🏆</span>
            <h3 className="text-lg font-medium text-[#521C14]">Best Actor Award</h3>
            <p className="text-sm text-[#654D3B] text-center mt-2">
              Recognized for outstanding performance in the play <span className="italic">"from Shakti Production"</span>.
            </p>
          </div>

          {/* Achievement Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <span className="text-4xl text-[#7E513B] mb-4">🎭</span>
            <h3 className="text-lg font-medium text-[#521C14]">More Than 4 plays</h3>
            <p className="text-sm text-[#654D3B] text-center mt-2">
              Performed in leading roles across dramas, comedies, and experimental plays.
            </p>
          </div>

          {/* Achievement Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <span className="text-4xl text-[#7E513B] mb-4">🌟</span>
            <h3 className="text-lg font-medium text-[#521C14]">National Stage Experience</h3>
            <p className="text-sm text-[#654D3B] text-center mt-2">
              Performed in theater festivals and events across India and abroad.
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/contact")} className="text-2xl p-3 border bg-[#7E513B] text-white rounded-lg flex justify-center items-center mx-auto mb-3 mt-3">
        Next
      </button>
    </div>
  );
};

export default AboutUs;
