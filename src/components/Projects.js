import React,{useState} from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
const images = [
    "/images/works/1.jpg",
    "/images/works/2.jpg",
    "/images/works/3.jpg",
    "/images/works/4.jpg",
    "/images/works/5.jpg",
    "/images/works/6.jpg",
    "/images/works/7.jpg",
    "/images/works/8.jpg",
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return (
      <>
        <section className="relative md:py-24 py-16" id="project">
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                My Work & Projects
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                Some projects that i have completed while being a full stack
                developer
              </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/1.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Marketing Apps Indosat
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    fullstack Engineer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(0)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/2.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Gaweyo
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Fullstack Engineer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(1)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/3.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Crane Monitoring Indonesia
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Fullstack Developer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(2)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/4.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Sales Tracking Indosat
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Back-end Engineer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(3)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/5.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Energi Bangsa
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Web Designer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(3)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/6.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Waste Cycling Apps
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Back-end Engineer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(5)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/7.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    Pharmacy Semarang
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Fullstack Developer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(6)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="/images/works/8.jpg" alt="" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <Link2
                    to="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                    target="_blank"
                    className="text-white hover:text-green font-semibold transition-all duration-500"
                  >
                    E-book Apps Islamic
                  </Link2>
                  <span className="block text-sm text-slate-400">
                    Full Developer
                  </span>
                </div>

                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link2
                    to="#"
                    onClick={() => handleCLick(7)}
                    className="btn bg-midgreen hover:bg-green text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setActiveIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setActiveIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </>
    );
}