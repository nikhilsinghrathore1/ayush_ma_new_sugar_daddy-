import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import quotes from '../../assets/Images/Group.svg';
import './ReusableCont.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ReusableCont = ({headings, paragraphs}) => {

    const mainRef = useRef();

    useEffect(() => {
        const setScrollText = () => {
            gsap.to('#heading1', {
                scrollTrigger: {
                trigger: '#heading1',
                toggleActions: 'play none play reverse',

                start: '0s',
                end: '+=2000s',
                //   markers:true,
                },
                opacity: 1,
                width: '100%',
                duration: 3,
                delay:0,
                x:0,
                y:0,
            });

            gsap.to('#heading2', {
                scrollTrigger: {
                trigger: '#heading2',
                toggleActions: 'play none play reverse',
                start: '+=400s',
                end: '+=1000s',
                //   markers:true,
                },
                opacity: 1,
                width: '100%',
                duration: 3,
            });

            gsap.to('#quotes', {
                scrollTrigger: {
                trigger: '#quotes',
                toggleActions: 'play none play reverse',
                start: '+=200s',
                end: '+=1000s',
                //   markers:true,
                },
                opacity: 1,
                duration: 1,
            });
            gsap.fromTo('#paragraph',{
                opacity:0,
                y:500,
            },{
                scrollTrigger:{
                    trigger: '#paragraph',
                    toggleActions: 'play none play reverse',
                    start: '+=0s',
                    end: '+=1000s',
                    // markers:true,
                },
                opacity:1,
                duration:0.5,
                y:0,
                ease:'none',
            })
        };


        const main = mainRef.current;
        ScrollTrigger.create({
            trigger: main,
            start: 'top 95%',
            end: 'bottom top',
            // markers: true,
            onEnter: () => {
                gsap.to(window, {
                    scrollTo: window.scrollY + window.innerHeight,
                    duration: 1,
                    ease: 'power1',
                });
            },
        });
      

        gsap.to('.head', {
            scrollTrigger: {
                pin: '.head',
                end: '+=1000s',
                pinSpacing: true,
                // markers: true,
            },
        });

        setScrollText();

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };

    }, []);

  return (
    <div ref={mainRef} className='bg-black flex justify-center items-center'>

      <div className="head">
        <div className="content-box ml-[7.85%]">
          <h2 className="heading text-white flex gap-4" id="heading1"><img id='quotes' className='' src={quotes} alt="" />{headings[0]}</h2>
          <h2 className="heading text-white" id="heading2">{headings[1]}</h2>
        </div>
        <div className='para' id='paragraph'>
            <p className='mb-4 lg::mb-8'>
            {paragraphs[0]}
            </p>
            <p>
            {paragraphs[1]}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ReusableCont;
