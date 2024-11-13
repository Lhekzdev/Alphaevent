import React from 'react'
import Section4EDUp from '../../components/EventDetails/Section4EDUp'
import Section4EDDown from '../../components/EventDetails/Section4EDDown'

const EventDetails = () => {
  return (
    <>
    <section className='bg-[#FFF0F0] overflow-hidden'>
        <Section4EDUp />
        <Section4EDDown />
    </section>
    </>
  )
}

export default EventDetails