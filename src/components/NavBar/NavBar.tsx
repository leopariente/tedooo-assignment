import React from "react";
import "./NavBar.scss";

// Nav bar component, displays on top of the screen
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="search">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="4"
            fill="url(#tedooo-logo_svg__a)"
          ></rect>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line
            d="M32 24.915a.224.224 0 0 1 0-.08l-.057-1.48a.316.316 0 0 1 0-.097 8.315 8.315 0 0 0-2.031-4.823 7.883 7.883 0 0 0-.608-.617c-.098-.093-.196-.186-.292-.28l-.136-.126.187-.092a4.3 4.3 0 0 0 2.371-3.005 4.181 4.181 0 0 0-1.132-3.915 4.46 4.46 0 0 0-2.745-1.36L27.201 9h-.498a4.242 4.242 0 0 0-1.84.543c-2.096 1.067-2.951 3.638-1.918 5.766l.017.044a1.9 1.9 0 0 0 .04.093 8.68 8.68 0 0 0-4.635 1.543v-.131a6.332 6.332 0 0 0-.72-2.56 6.772 6.772 0 0 0-7.04-3.486A6.589 6.589 0 0 0 6.764 12.8a6.314 6.314 0 0 0-1.732 3.886 6.158 6.158 0 0 0 .747 3.623c1.765 3.133 5.614 4.375 8.851 2.857l.125-.045v.234a8.557 8.557 0 0 0 .9 4.617c1.769 3.448 5.574 5.309 9.35 4.572a8.49 8.49 0 0 0 5.806-4.04A7.914 7.914 0 0 0 32 24.915Zm-15.565.995a6.762 6.762 0 0 1-.243-1.84c.014-3.043 1.943-5.74 4.8-6.71a7.156 7.156 0 0 1 3.084-.348c2.936.295 5.381 2.4 6.135 5.28a6.84 6.84 0 0 1-1.777 6.675 6.77 6.77 0 0 1-3.962 2.086c-3.585.599-7.044-1.615-8.037-5.143Zm-4.77-14.264h-.487c-.113 0-.232 0-.345.034a5.866 5.866 0 0 0-3.43 1.743 5.44 5.44 0 0 0-.73 6.743 5.687 5.687 0 0 0 4.845 2.732 5.58 5.58 0 0 0 3.362-.943 5.518 5.518 0 0 0 2.597-4.452 5.182 5.182 0 0 0-.758-3.057 5.755 5.755 0 0 0-5.048-2.8h-.006Zm18.574.183c.288.551.42 1.172.385 1.794h.006a3.43 3.43 0 0 1-1.851 2.829 3.484 3.484 0 0 1-1.455.445 3.094 3.094 0 0 1-.758-.057 4.036 4.036 0 0 1-1.794-.714 3.375 3.375 0 0 1-.962-4.349A3.678 3.678 0 0 1 27.04 9.9a3.68 3.68 0 0 1 3.2 1.929Z"
            fill="#fff"
          ></path>
          <defs>
            <linearGradient
              id="tedooo-logo_svg__a"
              x1="-6"
              y1="-4.5"
              x2="55.813"
              y2="51.088"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.031" stopColor="#96DCD0"></stop>
              <stop offset="0.052" stopColor="#6CCEBD"></stop>
              <stop offset="0.333" stopColor="#2DB8A1"></stop>
              <stop offset="0.698" stopColor="#28A38F"></stop>
              <stop offset="1" stopColor="#208171"></stop>
            </linearGradient>
          </defs>
        </svg>
        <input type="text" placeholder="Search"/>
      </div>
      <div className="menu">
        <a href="">Home</a>
        <a href="">Messaging</a>
        <a href="">Notifications</a>
      </div>
    </div>
  );
};

export default NavBar;
