import React from 'react'
import Section2Footer from '../../Landingcont/Footer/Section2Footer.jsx'
import {SignUp} from '../../../components/Subscribe/SignUp.jsx'



const Footer = () => {
  return (
    <>
    <section className='bg-[#2F3B4C] w-full px-[80px] py-[60px] '>
    {/* <Form /> */}
    <SignUp />
    <Section2Footer />
    </section>
    </>
  )
}

export default Footer