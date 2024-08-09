import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

export default function HeroOne() {
  return (
    <>
      <section
        className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5"
        id="home"
      >
        <div className="absolute inset-0" id="overlay"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-[140px]">
            {/* <div className="items-center justify-between"> */}
            <div>
              <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">
                Hey! I'm <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Rama Faisal",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Fullstack Developer",
                    1000,
                    "Laravel",
                    1000,
                    "Livewire",
                    1000,
                    "React",
                    1000,
                    "Vue",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typewrite text-green"
                  repeat={Infinity}
                />
                <span
                  className="typewrite text-green-500"
                  data-period="2000"
                  data-type='[ "Rama Faisal", "Laravel", "Livewire", "React", "Vue" ]'
                >
                  {" "}
                  <span className="wrap"></span>{" "}
                </span>
              </h4>
              <p className="text-slate-400 max-w-xl">
                A Senior Fullstack Developer with over 5 years of experience in
                Web Development.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/628984146699"
                  target="_blank"
                  className="btn bg-green hover:bg-oldgreen/5 text-white hover:text-white rounded-md"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                  target="_blank"
                  className="btn bg-midgreen hover:bg-oldgreen/10 text-green hover:text-white rounded-md ms-1"
                >
                  Upwork
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hero/profilePict.png"
                alt="Rama Faisal Profile Pict"
              />

              <div className="absolute lg:bottom-20 md:bottom-10 bottom-9 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <span className="text-3xl font-medium mb-0">
                  <span className="counter-value font-bold" data-target="125">
                    {" "}
                    <CountUp
                      start={7}
                      className="counter-value"
                      end={100}
                      duration={2.75}
                    />
                  </span>
                  +
                </span>
                <h6 className="text-sm text-slate-400 mt-1">
                  Project Completed
                </h6>
              </div>

              <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 lg:mr-3 w-44 text-center">
                <h6 className="font-semibold">Web Developer</h6>
                <h6 className="text-sm text-slate-400 mt-1">
                  5+ Years Experience
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
          <Link to="">
            <i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
