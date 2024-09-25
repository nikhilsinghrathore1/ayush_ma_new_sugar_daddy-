import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workData = [
    {
      id: 1,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Partnering with Real Estate Expert",
    },
    {
      id: 2,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Consecture adispcing elit", 
    },
    {
      id: 3,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Ut enim ad",
    },
    {
      id: 4,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Lorem ipsum it re",
    },
    {
      id: 5,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Consectetur adipisicing elit",
    },
    {
      id: 6,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Ut enim ad",
    },
    {
      id: 7,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Ut enim ad samet",
    },
    {
      id: 8,
      imgSrc: "../../assets/Images/Work/Work.png",
      caption: "Ab enim",
    },
  ];

  const imagesRef = useRef([]);
  const captionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(captionsRef.current, {
              opacity: 0.5,
              filter: "blur(4px)",
              duration: 0.3,
              marker:true
            });
            gsap.to(captionsRef.current[index], {
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.3,
            });
          },
          onLeaveBack: () => {
            gsap.to(captionsRef.current[index], {
              opacity: 0.2,
              filter: "blur(4px)",
              duration: 0.3,
            });
          },
        });
      });
    }, imagesRef);

    return () => ctx.revert();
  }, []);

  gsap.to('.image_scroll',{
    x:700,
    markers:true,
    scrollTrigger:{
      trigger:'.caption_scroll'
    }
  })

  return (
    <div className="work_root bg-black pl-32 pr-12 flex justify-between items-center text-white">
      <div className="flex flex-col items-center h-full w-full basis-1/3 justify-between pb-20">
        <h1 className="text-8xl font-bold flex justify-center h-full items-center">
          WORK
        </h1>
        <div className="h-fit">
          <div className="bg-white text-black rounded-md w-fit py-2 px-3 font-semibold">
            CASE STUDIES
          </div>
        </div>
      </div>
      <div className="basis-2/3 h-full flex justify-between pl-20 py-10">
        <div className="image_scroll h-full basis-1/3 flex flex-col gap-10 overflow-y-scroll scroll-w-none">
          {workData.map((item, index) => (
            <div>
              <div
                key={item.id}
                ref={(el) => (imagesRef.current[index] = el)}
                className="work_card bg-slate-600 p-4 mt-4 h-[17.5rem] w-56"
              >
                <img src={item.imgSrc} alt={item.caption} />
              </div>
            </div>
          ))}
        </div>
        <div className="basis-2/3 flex items-center"> 
          <div className="caption_scroll h-[15.5rem] overflow-y-clip flex flex-col gap-6 text-right">
            {workData.map((item, index) => (
              <p
                key={item.id}
                ref={(el) => (captionsRef.current[index] = el) }
                className="font-bold text-[47px] transition-opacity duration-300"
              >
                {item.caption}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
