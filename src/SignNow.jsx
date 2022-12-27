import React from "react";

const SignNow = () => {
  return (
    <div className="space-x-4 space-y-4 text-center">
      <h1 className="text-2xl font-thin">Stay up to date</h1>
      <div className="flex justify-center">
      <div className="border border-pink-200 p-1 rounded-xl w-fit">
        <input
          type="email"
          class="border-none md:mr-10 placeholder:text-gray-300 placeholder:font-thin placeholder:text-sm"
          maxlength="256"
          name="Footer-Email-Two"
          data-name="Footer Email Two"
          aria-label="Enter your email"
          placeholder="Enter your email"
          id="Footer-Email-Two"
          required=""
        ></input>
        <input
          type="submit"
          value="Subscribe Now"
          data-wait="Please wait..."
          class="bg-pink-200 p-1 px-4 rounded-full text-white"
        ></input>
      </div>
      </div>
      
    </div>
  );
};

export default SignNow;
