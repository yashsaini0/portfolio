import React from "react";
import github from "../../public/assets/github.png";
import instagram from "../../public/assets/instagram.png";
import linkedin from "../../public/assets/linkedin.png";

function Navbar() {
  return (
    <>
      <div className="w-screen h-18 flex justify-between">
        <h1 className=" mx-12 text-5xl m-2 text-white font-serif">YS</h1>
        <div className=" flex m-2">
          <a href="https://github.com/yashsaini0">
            <img
              src={github}
              alt="github"
              className=" h-10 w-10 mx-5 filter invert hover: cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/yash.saini03/">
            <img
              src={instagram}
              alt="instagram"
              className=" h-10 w-10 mx-5 filter invert hover: cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/yashashvi-saini-09bb06287/">
            <img
              src={linkedin}
              alt="linkedin"
              className=" h-10 w-10 mx-5 filter invert hover: cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
