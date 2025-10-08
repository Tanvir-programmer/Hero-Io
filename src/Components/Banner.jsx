import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroImg from "../assets/hero.png";
const Banner = () => {
  return (
    <>
      <div className="hero bg-[#f5f5f5]">
        <div className="hero-content text-center py-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl md:text-5xl font-semibold">
              We Build
              <span className="font-bold text-[#8e53ee]"> Productive</span> Apps
            </h1>
            <p className="py-6 text-base md:text-lg">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-info min-w-[150px] text-2xl border-1">
                <a
                  href="https://play.google.com/store/apps?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGooglePlaystore />
                </a>
              </button>
              <button className="btn btn-info min-w-[150px] text-2xl border-1">
                <a
                  href="https://www.apple.com/sa/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaAppStore />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] pt-10">
        <img className="w-full md:w-3/4 mx-auto" src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-auto md:h-[310px] py-10">
        <h2 className="text-white font-semibold text-2xl md:text-3xl text-center pt-2 md:pt-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center text-white mt-8 md:mt-10 gap-8 md:gap-0">
          <div className="text-center w-full md:w-auto">
            <p className="opacity-80 text-base">Total Downloads</p>
            <h1 className="font-bold text-3xl md:text-5xl my-3">29.6M</h1>
            <p className="opacity-80 text-sm md:text-base">
              21% more than last month
            </p>
          </div>
          <div className="text-center w-full md:w-auto">
            <p className="opacity-80 text-base">Total Reviews</p>
            <h1 className="font-bold text-3xl md:text-5xl my-3">906K</h1>
            <p className="opacity-80 text-sm md:text-base">
              46% more than last month
            </p>
          </div>
          <div className="text-center w-full md:w-auto">
            <p className="opacity-80 text-base">Active Apps</p>
            <h1 className="font-bold text-3xl md:text-5xl my-3">132+</h1>
            <p className="opacity-80 text-sm md:text-base">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
