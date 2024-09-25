import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'

import React, { useEffect, useRef } from 'react'

const CaseStudy = () => {

const test = useRef(null)
const body = useRef(null)


useEffect(() => {
 


  let tl =gsap.timeline()

  gsap.registerPlugin(ScrollTrigger)

  tl.from(test.current,{

    scrollTrigger:{
      trigger:body.current,
      markers:true,
      top: "0 0" , 
      end: "bottom bottom " 
    },
    y:"200px",
    rotateX:"-90deg"

})


}, [])


  return (
    <div ref={body} className=' relative w-full h-screen overflow-hidden bg-red-400 flex items-center justify-center '>

               <h1 className='text-[8rem] font-poppins uppercase tracking-tighter '>case study</h1>

               {/* for the sliding window */}

               <div ref={test} className='w-[50%] h-[50%] bg-red-700 absolute bottom-3 rot'></div>

    </div>
  )
}

export default CaseStudy