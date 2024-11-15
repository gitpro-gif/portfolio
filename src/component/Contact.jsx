import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F4F2EE] text-[#521C14] min-h-screen p-6">
      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-playwrite font-semibold text-[#7E513B] mb-10 text-center">
          Contact Me
        </h1>

        {/* Photo and Contact Details */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 justify-between">
          {/* Photo Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
            <img
              src="https://ccrtindia.gov.in/wp-content/uploads/2020/10/Auditorium_176_Pic1-1.jpg" // Replace with your image URL
              alt="Contact"
              className="w-64 h-64 lg:w-72 lg:h-72 rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
              {/* Mobile */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl lg:text-3xl">📱</span>
                <span className="text-lg lg:text-xl font-medium">
                  <strong>Mobile:</strong> +91 9834829258
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl lg:text-3xl">📧</span>
                <span className="text-lg lg:text-xl font-medium">
                  <strong>Email:</strong> mahajanvedant13@gmail.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl lg:text-3xl">🏠</span>
                <span className="text-lg lg:text-xl font-medium">
                  <strong>Address:</strong> YCCE Nagpur, Wanadongri
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg bg-[#7E513B] text-white text-lg font-medium shadow-lg hover:bg-[#5d3d2b] transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
