import React from "react";

function ComingSoon() {
  return (
    <div class="">
      <div class="py-10">
       
        <h2>Signup now and we'll let you know when it's ready. </h2>
      </div>
      
      <div class="pt-10 flex justify-center flex-rowspace-x-10">
      <form target="_blank" action="https://formsubmit.co/kbreyn06@gmail.com" method="POST" class="w-full max-w-sm">
  <div class="flex items-center border-b border-yellow-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="email"/>
    <button class="flex-shrink-0 bg-yellow-500 hover:bg-yellow-900 border-yellow-500 hover:border-yellow-900 text-sm border-4 text-white py-1 px-2 rounded " type="submit">
      Sign Up
    </button>
   
  </div>
</form>
</div>




      <div class="flex justify-center flex-rowspace-x-10">
        
      <img
          class="burrojars lg:w-1/3 hover:-translate-y-1 hover:scale-110"
          alt="burrojars"
          src={require("../assets/burrojars.png")}
        />
      </div>
    </div>
  );
}

export default ComingSoon;
