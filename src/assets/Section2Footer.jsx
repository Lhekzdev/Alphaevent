import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../../assets/logoFooter.svg";
import nLogoTwitter from "../../../assets/nLogoTwitter.svg";
import nLogoFacebook from "../../../assets/nLogoFacebook.svg";
import nLogoInstagram from "../../../assets/nLogoInstagram.svg";
import nLogoLinkedin from "../../../assets/nLogoLinkedin.svg";
import honri from "../../../assets/honri.svg";

const Section2Footer = () => {
  return (
    <>
      <section>
        <div className="parent flex flex-col lg:flex-row gap-[50px] pt-[40px] w-full">
          <div className="box1">
            <img src={logoFooter} alt="" />
            <p className="w-full lg:w-[453px] text-left text-[18px] mt-[32px] font-light text-[#F3F3F3]">
              Alvent is a global self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
            <div className="icon flex mt-[20px] gap-[20px]">
              <a
                href="https://x.com/_alvent?s=11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nLogoTwitter} alt="Twitter" />
              </a>
              <a
                href="https://www.facebook.com/share/18xsEWuedc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nLogoFacebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/al.vent?igsh=Ymg4aXV4amhldjZk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nLogoInstagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/al-vents/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nLogoLinkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
          <div className="box2 flex flex-col md:flex-row md:gap-[80px] lg:flex-row  gap-[50px]">
            <div className="">
              {/* <h2 className='text-[18px] font-bold text-[#F3F3F3]'>Useful Links</h2> */}
              <div className="flex gap-[50px] mt-[35px]">
                <div className="pt-[45px]">
                  <img src={honri} alt="" />
                </div>
                <ul className="text-left text-[18px] font-light text-[#F3F3F3]">
                  <h2 className="text-[18px] font-bold text-[#F3F3F3]">
                    Useful Links
                  </h2>

                  <li className="mt-[12px] cursor-pointer">
                    <Link to="/LogIn">Login</Link>
                  </li>
                  <li className="mt-[12px] cursor-pointer">
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li className="mt-[12px] cursor-pointer">
                    <Link to="/Support">Support</Link>
                  </li>
                  {/* <li className="mt-[12px] cursor-pointer">
                    <Link to="/contact">Contact</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div>
              <div className="flex gap-[50px] mt-[35px]">
                <div className="pt-[45px]">
                  <img src={honri} alt="" />
                </div>
                <ul className="text-left text-[18px] font-light text-[#F3F3F3]">
                  <h2 className="text-[18px] font-bold text-[#F3F3F3]">
                    Legal
                  </h2>
                  <li className="mt-[12px] cursor-pointer">
                    <Link to="/TermsSer">Terms of Service</Link>
                  </li>
                  <li className="mt-[12px] cursor-pointer">
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2Footer;
