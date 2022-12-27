import React from "react";

const RecentlyJoined = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-5xl my-5">Already Joined!</h1>
      <div className="flex flex-wrap justify-center">
        {Array(6)
          .fill()
          .map((item, i) => (
            <div className="border border-gray-200 hover:shadow-gray-100 hover:shadow-xl w-full md:w-80 m-5 h-60 p-5 text-start rounded-lg space-y-4">
              <h1 className="text-xl font-medium">Testimonial Title</h1>
              <p className="text-md font-thin">
                <span className=" font-medium">[testimonial goes in here]</span>{" "}
                lorem ipsum is a placeholder text to demonstrate the visual.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://uploads-ssl.webflow.com/63547883d13ee963134e3f68/63a9f32eddf22766ae4b2deb_Testimonial%20Avatar%2003.png"
                  alt=""
                  className="rounded-full w-12 h-12 bg-slate-100"
                />
                <div>
                  <h1 className=" font-medium">Customer Name</h1>
                  <p className="text-md font-thin">Company Name</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyJoined;
