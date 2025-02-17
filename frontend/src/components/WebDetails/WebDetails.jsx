import React, { useEffect, useRef } from "react";
import './WebDetails.css';
import { SiAdidas, SiNike, SiCocacola, SiPuma, SiJordan, SiZara } from "react-icons/si";
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
        x: gsap.utils.unitize(x => parseFloat(x) % (list.scrollWidth / 2))
      }
    });
  }, []);

  return (
    <div>
      <div>
        <div className='h-35 w-140 bg-white absolute z-10'>
          <div className='jost-font relative left-26 top-10 no-of-brands'>
            <p>More than 25,000 world-<br/>class brands trust <span className="web-name">CollabX</span></p>
          </div>
        </div>
      </div>
      <div className='relative top-16 left-15 overflow-hidden'>
        <div ref={brandsRef} className='text-4xl flex gap-15 brands whitespace-nowrap'>
          <span className='flex flex-row gap-2.5'><CgChanel/> <p>Chanel</p></span>
          <span className='flex flex-row gap-2.5 relative bottom-4'><SiZara className='size-17'/></span>
          <span className='flex flex-row gap-2.5'><SiNike/> <p>Nike</p></span>
          <span className='flex flex-row gap-2.5'><ImOmega/> <p>Omega</p></span>
          <span className='flex flex-row gap-2.5'><SiAdidas/><p>Adidas</p></span>
          <span className='flex flex-row gap-2.5'><TbBrandPepsi/> <p>Pepsi</p></span>
          <span className='flex flex-row gap-2.5 relative bottom-7'><SiCocacola className='size-23'/></span>
          <span className='flex flex-row gap-2.5'><SiPuma/> <p>Puma</p></span>
          <span className='flex flex-row gap-2.5'><SiJordan/><p>Jordan</p></span>
        </div>
      </div>
      <div className="relative bottom-23">
        <div className='h-35 w-20 bg-white absolute right-0 z-10'></div>
      </div>
    </div>
  );
};

export default WebDetails;