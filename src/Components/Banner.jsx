import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroImg from "../assets/hero.png";
const Banner = () => {
  return (
    <>
      <div className="hero bg-[#f5f5f5]">
        <div className="hero-content text-center py-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-Semibold">
              We Build
              <span className="font-bold text-[#8e53ee]"> Productive</span> Apps
            </h1>
            <p className="py-6">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <button className="btn mr-4 btn-info min-w-[150px] text-2xl border-1">
              <a href="https://play.google.com/store/apps?hl=en" target="blank">
                {" "}
                <IoLogoGooglePlaystore />
              </a>
            </button>
            <button className="btn ml-4 btn-info  min-w-[150px] text-2xl border-1">
              <a href="https://www.apple.com/sa/app-store/" target="blank">
                <FaAppStore />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] pt-10">
        <img className="w-3/4 mx-auto" src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[310px]">
        <h2 className="text-white font-semibold text-3xl text-center pt-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex justify-around text-white items-center mt-10">
          <div className="text-center">
            <p className="opacity-80">Total Downloads</p>
            <h1 className="font-bold text-5xl my-3">29.6M</h1>
            <p className="opacity-80">21% more than last month</p>
          </div>
          <div>
            <p className="opacity-80">Total Reviews</p>
            <h1 className="font-bold text-5xl my-3">906K</h1>
            <p className="opacity-80">46% more than last month</p>
          </div>
          <div>
            <p className="opacity-80">Active Apps</p>
            <h1 className="font-bold text-5xl my-3">132+</h1>
            <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
