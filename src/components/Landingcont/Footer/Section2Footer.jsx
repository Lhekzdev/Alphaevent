import React from 'react'
import logoFooter from '../../../assets/logoFooter.svg'
import google from '../../../assets/google.svg'
import apple from '../../../assets/apple.svg'
import twitter from '../../../assets/twitter.svg'
import instergram from '../../../assets/instergram.svg'
import honri from '../../../assets/honri.svg'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Section2Footer = () => {
    const navigate = useNavigate();
    let redir = useNavigate();


    
    const handleForgotPassword = () => {
        // Navigate to the VerifyAcc page
        navigate("/ForgotPassword");
      };
  
  return (
    <>
    <section>
        <div className="parent flex flex-col lg:flex-row gap-[50px] pt-[40px] w-full">
            <div className="box1">
                <img src={logoFooter} alt="" />
                <p className='w-full lg:w-[453px] text-left text-[18px] mt-[32px] font-light text-[#F3F3F3]'>Alvent is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                <div className="icon flex mt-[20px] gap-[20px]">
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instergram} alt="" />
                </div>
            </div>
            <div className="box2 flex flex-col md:flex-row md:gap-[80px] lg:flex-row  gap-[50px]">
               <div className='' >
               {/* <h2 className='text-[18px] font-bold text-[#F3F3F3]'>Useful Links</h2> */}
               
                <div className='flex gap-[50px] mt-[35px]' >
                   
                    <div className='pt-[45px]'>
                    <img src={honri} alt="" />
                    </div>
                    <ul className='text-left flex flex-col items-start text-[18px] font-light text-[#F3F3F3]'>
                    <h2 className='text-[18px] font-bold text-[#F3F3F3]'>Useful Links</h2>
                      <button> <li onClick={()=> redir('/LogIn')} className='mt-[12px]'>Login</li></button> 
                      <button>  <li onClick={()=> redir('/signup')}className='mt-[12px]'>Register</li></button>
                        <li className='mt-[12px]'>About Alvent</li>
                        <li className='mt-[12px]'>Contact</li>
                    </ul>
                </div>
               </div>
               <div>
             
                <div className='flex gap-[50px] mt-[35px]'>
               
                   <div className='pt-[45px]'>
                   <img src={honri} alt="" />
                   </div>
                    <div className='text-left flex  flex-col text-[18px] font-light text-[#F3F3F3]'>
                    <h2 className='text-[18px] font-bold text-[#F3F3F3]'>Legal</h2>
                    <button onClick={()=> redir('/termsSer')} className='mt-[15px]'>Terms of Service</button>
                    <button onClick={()=> redir('/privacypolicy')} className='mt-[15px] text-left '>Privacy Policy</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section2Footer