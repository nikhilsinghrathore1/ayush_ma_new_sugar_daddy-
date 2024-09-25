import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import img from '../../../public/img1.jpeg'

const CaseStudy = () => {
  const cont1 = useRef(null);
  const cont2 = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: body.current,
        markers: true, // Keep this for debugging
        start: "top top",
        end: "1000px top",
        scrub: 1,
        pin: true,
      },
    });

    tl.set(cont1.current, { transformPerspective: 1000 });
 

    tl.fromTo(cont1.current, {
      y: "0px",
      transformOrigin: "bottom",
      rotateX: "90deg",
    }, {
      rotateX: "0deg",
      top: "30%",
    });

    tl.to(cont1.current, {
      scale: "0.94",
      top:"-50%",
      transformOrigin: "center",
    });

    tl.set(cont2.current, { transformPerspective: 1000 });

    tl.fromTo(cont2.current, {
      y: "0px",
      transformOrigin: "bottom",
      rotateX: "90deg",
    }, {
      rotateX: "0deg",
      top: "30%",
    });

    tl.to(cont2.current, {
      scale: "0.94",
      transformOrigin: "center",
    });
  }, []);

  return (
    <div ref={body} className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
      <h1 className='text-[8rem] font-poppins uppercase tracking-tighter'>case study</h1>

      <div ref={cont1} className='w-[50%] h-[50%] z-20 absolute bottom-[-180px] rounded-xl shadow-lg shadow-black/60 overflow-hidden rot'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/28542950/pexels-photo-28542950/free-photo-of-african-penguins-on-a-beach-in-south-africa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="not showing" />
      </div>

      <div ref={cont2} className='w-[50%] h-[50%] z-20 absolute bottom-[-180px] rounded-xl shadow-lg shadow-black/60 overflow-hidden rot'>
        <img className='w-full h-full object-cover' src={img} alt="not showing" />
      </div>
    </div>
  );
};

export default CaseStudy;
