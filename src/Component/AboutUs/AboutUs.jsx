import React, { useEffect, useRef } from 'react'
import ReusableCont from '../ReusableCont/ReusableCont'
import useInView from '../Hook/useInView'

const AboutUs = ({onBlackBackground}) => {
  const [aboutRef, inView] = useInView({ threshold: 0.95 });
  useEffect(()=>{
    onBlackBackground(inView)
  })
  
  return (
    <div ref={aboutRef} id='about' className=''>
        <ReusableCont 
        headings={['From Dreamers to Doers:', 'Get to Know Us']} 
        paragraphs={[
        'At the heart of who we are is the power to inspire. Launched in 2017, we started with a big dream: redefining how brands connect with their audience. Fast forward, and we’ve grown from a small squad to a top agency known for our fresh ideas and client-focused approach.',
        `The creative geniuses behind crafting stories and concepts that propel your brand forward. IRL blends your vision with visuals that leave a lasting impression, empowering you to make a bold statement in the digital world. Ready to own the digital scene? Let's team up and take your impact to the next level`
        ]}
        />
  </div>
  )
}

export default AboutUs