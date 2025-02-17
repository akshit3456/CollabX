import "./Header.css";
import { assets } from "../../assets/assets";
import { IoPeopleCircle } from "react-icons/io5";
import { BiSolidHeartCircle } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { React } from "react";

const Header = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // First part (All elements animate together)
    tl.from(
      ".heading1",
      {
        opacity: 0,
        y: 200, // Moves down from 200px
        duration: 1,
      },
      "start"
    ).from(
      [".box1", ".box2", ".box3", ".box4"],
      {
        opacity: 0,
        duration: 1,
        x: (i, target) =>
          target.classList.contains("box1")
            ? -200
            : target.classList.contains("box4")
            ? 200
            : 0,
        y: (i, target) =>
          target.classList.contains("box2")
            ? 200
            : target.classList.contains("box3")
            ? -200
            : 0,
      },
      "start"
    );

    // Second part (All elements animate together with a shorter delay after the first part)
    tl.from(
      [".heading-text", ".triangles", ".influencer-box", ".diagonal-lines"],
      {
        opacity: 0,
        duration: 1,
        x: (i, target) =>
          target.classList.contains("triangles")
            ? -90
            : target.classList.contains("influencer-box")
            ? 90
            : 0,
        y: (i, target) => (target.classList.contains("heading-text") ? 90 : 0),
        scale: (i, target) =>
          target.classList.contains("diagonal-lines") ? 0 : 1,
      },
      "-=0.7"
    ); // Starts 0.7s earlier (overlaps slightly with first part for faster transition)

    // ✅ Make .statisfied-box come from the left (-x axis)
    tl.from(
      ".statisfied-box",
      {
        opacity: 0,
        x: -90, // Moves from the left (-X)
        duration: 1,
      },
      "-=0.9"
    ); // Overlaps a bit with the previous animations

    // Cross animation (Happens almost immediately after the second part)
    tl.from(
      ".cross",
      {
        opacity: 0,
        y: 70,
        rotate: 120,
        duration: 0.8, // Faster animation
      },
      "-=0.5"
    ); // Overlaps slightly with second part

    // Third part (All elements animate together with a very short delay)
    tl.from(
      ".discover-button",
      {
        opacity: 0,
        duration: 0.8, // Faster appearance
      },
      "-=0.6"
    ); // Starts 0.6s earlier to make the transition faster
  });
  return (
    <div className="flex heading-start">
      <div className="relative left-357">
      <div className="diagonal-lines"></div>
      </div>
      <div className="heading relative top-20 right-3">
        <div>
          <h1 className="text-6xl relative left-25 top-50 font-bold heading1 inter-font">
            Find The Right <br /> Influencer For Your <br /> Business
          </h1>
        </div>
        <p className="relative left-25 top-57 text-gray-600 heading-text inter-font">
          Ideas spark, creators ignite. Innovation thrives where vision meets
          craft. Build <br />
          express, and inspire—the world moves forward on the dreams we dare to
          shape.
        </p>
        <button className="py-4 px-10 bg-gradient-to-br from-pink-400 to-purple-500 cursor-pointer rounded-4xl relative top-66 left-24  text-white font-bold hover:scale-[1.1] transition-transform discover-button jost-font">
          Discover More
        </button>

        <div className="h-17 w-50 bg-white relative top-72 left-178 z-10 statisfied-box">
          <div className="flex relative right-1">
            <BiSolidHeartCircle className="h-13 w-13 relative left-3.5 top-2 text-[#9B59B6]" />
            <div className="flex flex-col">
              <p className="number relative left-6.5 top-2">99.99%</p>
              <p className="text-gray-700 relative left-6 top-1.5 statisfied-box-text">
                Statisfied Users
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative left-158 bottom-58 z-10 text-[#2ECC71] triangles">
          <BiSolidRightArrow className="arrows relative left-6" />
          <BiSolidRightArrow className="arrows relative left-5" />
          <BiSolidRightArrow className="arrows relative left-4" />
          <BiSolidRightArrow className="arrows relative left-3" />
          <BiSolidRightArrow className="arrows relative left-2" />
          <BiSolidRightArrow className="arrows relative left-1" />
        </div>
      </div>

      <div className="flex relative top-38.5 left-36 gap-6">
        <div className="relative bottom-1">
          <div className="h-75 w-73 px-2.5 py-2.5 bg-[#FFFFFF] box1">
            <div className="h-70 w-68 relative innerbox1 overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src={assets.pic1}
                alt=""
              />
            </div>
          </div>
          <div className="h-75 w-73 bg-[#FFFFFF] relative top-5 overflow-hidden box2">
            <div className="h-70 w-68 relative top-2.5 left-2.5 overflow-hidden innerbox2">
              <img
                className="w-full h-full object-fill"
                src={assets.pic2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-75 w-73 bg-[#FFFFFF] relative bottom-5 overflow-hidden box3">
            <div className="h-70 w-68 relative top-2.5 left-2.5 overflow-hidden innerbox3">
              <img
                className="w-full h-full object-fill"
                src={assets.pic4}
                alt=""
              />
            </div>
          </div>

          <div className="h-75 w-73 bg-[#FFFFFF] overflow-hidden box4">
            <div className="h-70 w-68 relative top-2.5 left-2.5 overflow-hidden innerbox4">
              <img
                className="w-full h-full object-fill"
                src={assets.pic1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-17 w-50 bg-white relative top-88 flex items-center influencer-box">
        <IoPeopleCircle className="h-13 w-13 relative left-2 text-[#9B59B6] people-icon" />
        <div className="flex flex-col ml-5">
          <p className="number relative right-2">4156+</p>
          <p className="text-gray-700 relative bottom-1 right-2 influencer-box-text">
            Popular Influencer
          </p>
        </div>
      </div>
      <div className='relative right-346 bottom-2'>
        <ImCross className="absolute top-133 left-324 text-[#9B59B6] cross" />
      </div>
    </div>
  );
};

export default Header;
