import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F4F2EE] text-[#521C14] min-h-screen p-6">
      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-playwrite font-semibold text-[#7E513B] mb-6 text-center">Contact Me</h1>

        {/* Photo and Contact Details */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 justify-between">
          {/* Photo Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
            <img
              src=""
              alt="Contact"
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg shadow-lg object-cover sm:w-64 sm:h-64 md:w-72 md:h-72"
            />
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium text-[#7E513B]">📱</span>
                <span className="text-lg">Mobile: +1234567890</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium text-[#7E513B]">📧</span>
                <span className="text-lg">Email: example@example.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium text-[#7E513B]">🏠</span>
                <span className="text-lg">Address: 123 Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
