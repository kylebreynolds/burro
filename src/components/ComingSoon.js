import React from "react";

function ComingSoon() {
  return (
    <div class="">
      <div class="py-5">
        <h2>Signup now and we'll let you know when it's ready! </h2>
      </div>

      <div class="pt-5 flex justify-center flex-rowspace-x-10">
        <form
          target="_blank"
          action="https://formsubmit.co/kbreyn06@gmail.com"
          method="POST"
          class="w-full max-w-sm"
        >
          <div class="flex items-center border-b border-yellow-500 pt-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-white border"
              type="email"
              name="email"
              placeholder="Email"
              aria-label="email"
            />
            <button
              class="flex-shrink-0 bg-yellow-500 hover:bg-yellow-900 border-yellow-500 hover:border-yellow-900 text-sm border-4 text-white py-1 px-2 rounded "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

        <div class="flex justify-center">
        
        <img
          class="burrojars lg:w-1/3 "
          alt="burrojars"
          src={require("../assets/burrojars.png")}
        />
        
      </div> 
      <div class="flex justify-center gap-8">
        <a
          href="https://www.instagram.com/burro_chili/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icons lg:w-20"
        >
        <img
          class=""
          alt="burrojars"
          src={require("../assets/burroinsta.png")}
        />
        </a>
      </div>
        
       
      
      
        
        
      
    </div>
  );
}

export default ComingSoon;
