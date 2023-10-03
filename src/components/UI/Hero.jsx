/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import heroImg from "../../assets/images/saya.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center sm:flex-col md:flex-row">
          {/*=== Hero Left Content Start ===*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] "
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Syahrul Hidayatullah <br /> Frontend Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="mailto:syhrl44@gmail.com">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"> Hire Me</i>
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1Qua2FqqQetYYVHVQUatAfQtVfcATr_Lk/view?usp=sharing"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See my CV
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I have a keen interest in becoming a front-end developer with my
              experience attending a bootcamp. By maximizing my skills and
              programming languages, I have assisted several small companies in
              creating website designs and improving user experience for their
              users
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor font-[600] text-[15px]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/syahrul-hidayatullah-136b05223/"
                  className="text-smallTextColor font-[600] text-[18px]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Syahrul0212"
                  className="text-smallTextColor font-[600] text-[18px]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/syahrulhyt/"
                  className="text-smallTextColor font-[600] text-[18px]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/*=== Hero Left Content End ===*/}

          {/*=== Hero Img Start ===*/}
          <div className="basis-1/2 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/*=== Hero Img End ===*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
