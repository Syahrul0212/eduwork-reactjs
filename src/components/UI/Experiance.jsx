/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import frontendImg from "../../assets/images/front-end.png";

const Experiance = () => {
  return (
    <section id="experience">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            My Experiences
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            With expertise in web design, computer lab management, and back-end
            development, I've crafted visually appealing and responsive website
            interfaces while ensuring a safe learning environment as a Computer
            Lab Assistant. Additionally, my experience as a Back-End Developer
            honed my skills in building secure systems. These diverse roles have
            equipped me with adaptability and a comprehensive skill set,
            enabling me to excel in various dynamic work environments.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*=== Vertical Line Start ===*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-200 h-full left-1/2 transform -translate-x-1/2"></div>
              {/*=== Vertical Line End ===*/}

              {/*=== Left card Start ===*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white shadow rounded p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Web Designer
                        </h3>
                        <h4 className="text-Black font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-lg">
                          PT Surya Citra Media, Tbk
                          <p className="text-[13px] text-smallTextColor group-hover:text-white group-hover:font`[500]">
                            August – December 2023 | Jakarta
                          </p>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*=== Left card End ===*/}

              {/*=== Right card Start ===*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white shadow rounded p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Computer Lab Assistant
                        </h3>
                        <h4 className="text-Black font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-lg">
                          Assistant Laboratorium Fasilkom Universitas Mercu
                          Buana
                          <p className="text-[13px] text-smallTextColor group-hover:text-white group-hover:font`[500]">
                            May 2022 – December 2023 | Jakarta
                          </p>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*=== Right card Start ===*/}

              {/*=== Left card Start ===*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white shadow rounded p-4 group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Back-End Developer
                        </h3>
                        <h4 className="text-Black font-[500] mb-3 group-hover:text-white group-hover:font-[500] text-lg">
                          Kementerian Perhubungan Republic Indonesia
                          <p className="text-[13px] text-smallTextColor group-hover:text-white group-hover:font`[500]">
                            January - Februari 2023 | Jakarta
                          </p>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/*=== Left card End ===*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
