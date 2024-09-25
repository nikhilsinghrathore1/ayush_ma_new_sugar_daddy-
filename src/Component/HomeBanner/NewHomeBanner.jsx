import React, { useEffect, useRef } from 'react';
import './NewHomeBanner.css';
import logo from '../../assets/Images/irl_logo.svg'
import useInView from '../Hook/useInView';
import gsap from 'gsap';

function NewHomeBanner({onLightBackground}) {

  const [bannerRef, inView] = useInView({ threshold: 0.1 });
  useEffect(()=>{
    onLightBackground(inView)
  })

  const arrowRef = useRef(null);

  useEffect(()=>{
    const ele = arrowRef.current;
    gsap.to(ele,
    {
      y:"100%",
      duration:0.8,
      repeat:-1,
      yoyo:true,
      ease:"none",
    })
  },[])

  return (
    <div ref={bannerRef} className=''>
      <div className='mainDiv'>
        <div className='logoDiv'>
            <img className='logo' src={logo} alt="" />
            <div className='tagLine'>
                <p className=''>Dreamers, Doers, and Difference Makers</p>
            </div>
        </div>
        <div className='scrollDownDiv'>
        	<svg className='scrollDown' width="258" height="132" viewBox="0 0 258 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          	<path ref={arrowRef} d="M148.656 54.2181L130.094 72.7806C129.804 73.0703 129.41 73.233 129 73.233C128.591 73.233 128.197 73.0703 127.907 72.7806L109.345 54.2181C109.072 53.9249 108.923 53.537 108.93 53.1363C108.937 52.7356 109.099 52.3532 109.383 52.0698C109.666 51.7864 110.049 51.624 110.449 51.617C110.85 51.6099 111.238 51.7586 111.531 52.0319L127.454 67.9518V26.3125C127.454 25.9022 127.617 25.5088 127.907 25.2187C128.197 24.9286 128.59 24.7656 129 24.7656C129.411 24.7656 129.804 24.9286 130.094 25.2187C130.384 25.5088 130.547 25.9022 130.547 26.3125V67.9518L146.47 52.0319C146.763 51.7586 147.151 51.6099 147.552 51.617C147.952 51.624 148.335 51.7864 148.618 52.0698C148.902 52.3532 149.064 52.7356 149.071 53.1363C149.078 53.537 148.929 53.9249 148.656 54.2181Z" fill="#B8B8B8"/>
            <path d="M256 131.879C256 60.1488 199.14 2 129 2C58.8598 2 2 60.1488 2 131.879" stroke="#B8B8B8" stroke-width="3"/>
        	</svg>
        </div>
      </div>
    </div>
  )
}

export default NewHomeBanner