import React from "react";

function Home() {
  return (
    <div>
      
      <div class="flex justify-center flex-rowspace-x-10 ">
        <img
          class="logo"
          alt="logo"
          src={require("../assets/burrologo.png")}
        />
      </div>
      
      

      <div class="pt-10 flex flex-row justify-center space-x-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-white-500 fill-white animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;
