import React, { useEffect, useRef } from "react";
import "./WebDetails.css";
import {
  SiAdidas,
  SiNike,
  SiCocacola,
  SiPuma,
  SiJordan,
  SiZara,
} from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { ImOmega } from "react-icons/im";
import { TbBrandPepsi } from "react-icons/tb";
import gsap from "gsap";

const WebDetails = () => {
  const brandsRef = useRef(null);

  useEffect(() => {
    if (!brandsRef.current) return;

    const list = brandsRef.current;
    const originalContent = list.innerHTML;
    list.innerHTML += originalContent;

    const baseSpeed = 12;

    gsap.to(list, {
      x: `-${list.scrollWidth / 2}px`,
      duration: baseSpeed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (list.scrollWidth / 2)),
      },
    });
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="h-35 w-140 bg-white relative z-5">
            <div className="jost-font relative left-26 top-10 no-of-brands ">
              <p>
                More than 25,000 world-
                <br />
                class brands trust <span className="web-name">CollabX</span>
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
          <div className="absolute top-[-230px] right-0 bg-white h-35 w-20 z-5"></div>
        </div>
      </div>
      <div className="relative top-1000">wcbehve</div>
    </div>
  );
};

export default WebDetails;
