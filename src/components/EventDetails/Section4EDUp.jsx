import React from 'react'
import arrowRight from '../../assets/arrowRight.svg'

const Section4EDUp = () => {
  return (
    <>
    <section className='w-full'>
      <div className='flex gap-[714px] w-full ml-[60px] mr-[60px]'>
        <p>Similar events you may like</p>
        <div className="flex items-center justify-center gap-[8px]">
            <button>
            See more
            </button>
            <img src={arrowRight} alt="" className="pt-[7px]" />
          </div>
      </div>
    </section>
    </>
  )
}

export default Section4EDUp