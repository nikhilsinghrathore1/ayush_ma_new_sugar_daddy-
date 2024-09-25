import React from 'react'

const CaseStudy = () => {
  return (
    <div className=' relative w-full h-screen overflow-hidden bg-red-400 flex items-center justify-center '>

               <h1 className='text-[8rem] font-poppins uppercase tracking-tighter '>case study</h1>

               {/* for the sliding window */}

               <div className='w-[50%] h-[50%] bg-red-700 absolute bottom-3 rotate-0'>

               </div>

    </div>
  )
}

export default CaseStudy