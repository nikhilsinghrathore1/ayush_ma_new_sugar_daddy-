import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'

import React, { useEffect, useRef } from 'react'

const CaseStudy = () => {

const test = useRef(null)
const body = useRef(null)


useEffect(() => {
 


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: body.current,
      markers: true,
      top: "0px 100px ", 
      end:"1000px 0",
      scrub: 1,
      pin:true,
    }
  });

  tl.set(test.current, { transformPerspective: 1000 })
  
  tl.fromTo(test.current, {
    y: "00px",
    transformOrigin: "bottom",
    rotateX: "90deg"
  }, {
    rotateX: "0deg",
    top:"30%",
  },'a');


  tl.to(test.current, {
   
    scale:"0.94",
    transformOrigin:"center"
  });

  

}, [])


  return (
    <div ref={body} className=' relative w-full h-screen overflow-hidden flex items-center justify-center '>

               <h1 className='text-[8rem] font-poppins uppercase tracking-tighter '>case study</h1>

               {/* for the sliding window */}

               <div ref={test} className='w-[50%] h-[50%] absolute bottom-[-180px] rounded-lg shadow-sm shadow-black rot'>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/28542950/pexels-photo-28542950/free-photo-of-african-penguins-on-a-beach-in-south-africa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="not showing" />
               </div>


    </div>
  )
}

export default CaseStudy