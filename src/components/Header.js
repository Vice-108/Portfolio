import React from "react";
import Logo from '../assets/name.svg';

const Header = () => {
  return (
  <div className="py-8">
      <div className="container mx-auto" >
        <div className="flex justify-between item-center ">
          <a href="https://vice-108.github.io/Portfolio/">
            <img  src={Logo} alt="Name Logo" />
          </a>
          <div>
            <a href="../assets/resume.pdf" download className="btn btn-sm py-4">My Resume</a>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Header;
