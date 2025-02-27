import React, { useEffect, useRef } from "react";
import "./WebDetails.css";
import {
  SiAdidas,
  SiNike,
  SiCocacola,
  SiPuma,
  SiZara,
} from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { ImOmega } from "react-icons/im";
import { TbBrandPepsi, TbCircleCheckFilled } from "react-icons/tb";
import { AiFillYoutube } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebDetails = () => {
  const brandsRef = useRef(null);
  const countRefs = useRef([]);

  useEffect(() => {
    if (!brandsRef.current) return;

    const list = brandsRef.current;
    const originalContent = list.innerHTML;
    list.innerHTML += originalContent; // Duplicate for infinite scroll effect

    gsap.to(list, {
      x: `-${list.scrollWidth / 2}px`,
      duration: 14,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (list.scrollWidth / 2)),
      },
    });

    // Animate count numbers
    countRefs.current.forEach((countRef, index) => {
      if (!countRef) return;
  
      const targetValue = parseFloat(countRef.dataset.value) || 0;
      let countValue = { val: 0 };
  
      gsap.to(countValue, {
        val: targetValue,
        duration: 3,
        delay: index * 0.2, // Stagger effect for smooth animations
        ease: "power2.out",
        onUpdate: () => {
          const isFloat = targetValue % 1 !== 0; // Check if targetValue is a float
          countRef.innerText = isFloat
            ? `${countValue.val.toFixed(1)}M+` // One decimal place for floats
            : `${Math.floor(countValue.val)}M+`; // Round down for whole numbers
        },
      });
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from("#no-of-brands", {
      x: -150,
      duration: 0.8,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger:{
        trigger:"#no-of-brands",
        scroller:"body",
        start: "top 95%"
      }
    });
  
    gsap.from("#detail_image_box", {
      x: -150,
      duration: 0.8,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger:{
        trigger:"#detail_image_box",
        scroller:"body",
        start: "top 80%"
      },
    });

    gsap.from("#detail_box_count", {
      y: -150,
      duration: 1,
      opacity: 0,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: "#detail_image_box",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        onEnter: ""
      }
    });

    gsap.from("#heading_influencer",{
      y:100,
      duration: 0.8,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: "#detail_image_box",
        scroller: "body",
        start: "top 80%",
      }
    })
  });
  

  return (
    <div>
      <div>
        <div>
          <div className="h-35 w-140 bg-white relative z-5">
            <div className="jost-font relative left-26 top-10 text-[33px] font-[500]">
              <p className="text-gray-800" id="no-of-brands">
                More than 25,000 world-
                <br />
                class brands trust{" "}
                <span className="font-[600] text-[#9B59B6]">CollabX</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative bottom-20 left-15">
          <div ref={brandsRef} className="text-4xl flex gap-15 brands">
            <span className="flex flex-row gap-2.5 text-[#DDB45F]">
              <CgChanel /> <p>Chanel</p>
            </span>
            <span className="flex flex-row gap-2.5 relative bottom-4 text-[#ffeb68]">
              <SiZara className="size-18 font-bold" />
            </span>
            <span className="flex flex-row gap-2.5 text-[#FF6600]">
              <SiNike /> <p>Nike</p>
            </span>
            <span className="flex flex-row gap-2.5 text-[#015497]">
              <TbBrandPepsi />
              <p>Pepsi</p>
            </span>
            <span className="flex flex-row gap-2.5 text-[#C40D2E]">
              <ImOmega /> <p>Omega</p>
            </span>
            <span className="flex flex-row gap-2.5">
              <SiAdidas />
              <p>Adidas</p>
            </span>
            <span className="flex flex-row gap-2.5 relative bottom-7">
              <SiCocacola className="size-23 text-[#F40008]" />
            </span>
            <span className="flex flex-row text-[#3FC90C]">
              <p>Puma</p>
              <SiPuma />
            </span>
          </div>
        </div>
        <div className="relative">
          <div  className="absolute top-[-230px] right-0 bg-white h-35 w-20 z-5"></div>
        </div>
        <div className="flex justify-center relative bottom-11">
          <div className="border-end"></div>
        </div>
      </div>

      <div className="flex mx-25 my-12">
        <div className="relative right-7 bottom-8">
          <div id="detail_box_count" className="h-34 w-38 bg-white absolute rounded-[50%] shadow-[0px_10px_30px_-0px_rgba(0,0,0,0.15)] z-10">
            <div className="relative left-7 top-5 jost-font">
              <p ref={(el) => countRefs.current.push(el)} data-value="27" className="text-[40px] font-[500] text-[#3498DA]">27M+</p>
              <p className="relative right-1 leading-3 font-[500] text-[15px] text-gray-600">
                TOTAL INSIGHT
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div id="detail_image_box" className="h-120 w-135 bg-amber-400 mr-15 rounded-[10px_10px_10px_110px]"></div>
          <div className="ml-10">
            <div className="flex flex-col gap-6 ">
              <div className="caveat-font text-2xl text-[#2ECC71]">
                Who We Are
              </div>
              <div id="heading_influencer" className="text-[40px] font-bold inter-font leading-12">
                Get ahead of the game with <br /> influencer marketing
              </div>
              <div className="text-[17px] text-[#33485E]">
                The foundation of growth is built on adaptability and seamless
                integration.
                <br /> Over time, a steady rhythm guides progress, fostering a
                supportive and <br /> well-balanced environment for continuous
                development
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-8 leading-8.5">
              <div >
                <p className="flex items-center gap-2">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Adaptability Drives Growth</p>
                </p>
                <p className="flex items-center gap-2">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Seamless Integration Matters</p>
                </p>
                <p className="flex items-center gap-2 ">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Consistency Fuels Progress</p>
                </p>
                <p className="flex items-center gap-2 ">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Influence Shapes Success</p>
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 ">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">
                    Supportive Environments Thrive
                  </p>
                </p>
                <p className="flex items-center gap-2 ">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Marketing Boosts Visibility</p>
                </p>
                <p className="flex items-center gap-2">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Innovation Sparks Change</p>
                </p>
                <p className="flex items-center gap-2">
                  <TbCircleCheckFilled className="text-[25px] text-[#3498DA]" />{" "}
                  <p className="text-[#33485E]">Continuous Development Wins</p>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button className="py-3 px-7  bg-gradient-to-br from-pink-400 to-purple-500 cursor-pointer rounded-4xl  text-white font-bold hover:scale-[1.1] transition-transform discover-button jost-font">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-15 mx-32 mt-30">
        <div className="flex gap-7">
          <AiFillYoutube className="relative bottom-3 text-[70px] text-[#CFDDE6]" />
          <div className="leading-8 jost-font">
            <p ref={(el) => countRefs.current.push(el)} data-value="7" className="text-[40px] font-[600]">7M+</p>
            <p className="font-[500]">Subscribers</p>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-500 h-[5vw]"></div>
        <div className="flex gap-7">
          <GrInstagram className="text-[60px] text-[#CFDDE6]" />
          <div className="leading-8 jost-font">
            <p ref={(el) => countRefs.current.push(el)} data-value="2.2" className="text-[40px] font-[600]">2.2M+</p>
            <p className="font-[500] relative left-7">Followers</p>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-500 h-[5vw]"></div>
        <div className="flex gap-7">
          <IoLogoTiktok className="text-[60px] text-[#CFDDE6]" />
          <div className="leading-8 jost-font">
            <p ref={(el) => countRefs.current.push(el)} data-value="3.1" className="text-[40px] font-[600]">3.1M+</p>
            <p className="font-[500] relative left-7">Followers</p>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-500 h-[5vw]"></div>
        <div className="flex gap-7 ">
          <FaTwitter className="text-[60px] text-[#CFDDE6]" />
          <div className="leading-8 jost-font">
            <p ref={(el) => countRefs.current.push(el)} data-value="5.2" className="text-[40px] font-[600]">5.2M+</p>
            <p className="font-[500] relative left-7">Followers</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default WebDetails;
