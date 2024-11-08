'use client'
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = ({ title, para, left, icon, rotate }: any) => {
  const [isMobileView, setIsMobileView] = useState(false)
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Set larger size for md screens and up
        setIsMobileView(false);
      } else {
        // Default size for small screens
        setIsMobileView(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className=" pb-16  md:pb-20 lg:pb-28">
          {
            !left ? (
              <div className=" flex flex-wrap items-center ">
                <div className="w-full  lg:w-1/2">
                  <SectionTitle
                    title={title}
                    paragraph={para}
                    mb="44px"
                  />

                </div>

                <div className="w-full flex justify-center md:justify-end md:pe-10  lg:w-1/2">
                  <div className={`relative ${rotate && 'rotate-12'}  lg:mr-0`}>
                    {icon}
                  </div>
                </div>
              </div>) : (
              !isMobileView ?
                <div className=" flex flex-wrap items-center">
                  <div className="w-full  lg:w-1/2">
                    <div className="relative  lg:ml-0">
                      {icon}
                    </div>
                  </div>
                  <div className="w-full flex justify-end lg:w-1/2">
                    <SectionTitle
                      title={title}
                      paragraph={para}
                      mb="44px"
                    />
                  </div>
                </div> : <div className=" flex flex-wrap items-center">

                  <div className="w-full flex justify-end lg:w-1/2">
                    <SectionTitle
                      title={title}
                      paragraph={para}
                      mb="44px"
                    />
                  </div>
                  <div className="w-full  lg:w-1/2">
                    <div className="relative  lg:ml-0">
                      {icon}
                    </div>
                  </div>
                </div>

            )
          }

        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
