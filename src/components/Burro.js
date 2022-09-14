import React from "react";

function Burro() {
  return (
    <div class="pt-10 flex flex-row justify-center  space-x-5">
      <div class="w-1/5">
        <a
          href="https://www.myjunkwaxbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/junkwaxbox.jpeg")}
          />
        </a>
        <h2>Junk Wax Box</h2>
        <p class="">
          Built/designed/managed<br></br> using Wix/Velo
        </p>
      </div>
      <div class="w-1/5">
        <a
          href="https://www.myjunkwaxbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/junkwaxbox.jpeg")}
          />
        </a>
        <h2>Junk Wax Box</h2>
        <p>
          Built/designed/managed<br></br> using Wix/Velo
        </p>
      </div>
      <div class="w-1/5">
        <a
          href="https://www.myjunkwaxbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="thumbnails hover:drop-shadow-2xl"
            alt="profile-pic"
            src={require("../assets/junkwaxbox.jpeg")}
          />
        </a>
        <h2>Junk Wax Box</h2>
        <p>
          Built/designed/managed<br></br> using Wix/Velo
        </p>
      </div>
      
    </div>
  );
}

export default Burro;
