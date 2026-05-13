import image from "./assets/_.jpeg";
import { Link } from "react-router-dom";

import group from "./assets/group.png";
import secureIcon from "./assets/trust.png";
import growIcon from "./assets/team-growth.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className=" min-h-screen flex flex-col xl:flex-row lg:flex-row  items-center justify-center  bg-linear-to-t from-green-300 via-transparent to-orange-300  ">
        <div className="w-auto h-auto  xl:w-145.5 xl:h-145.5 lg:w-145.5 lg:h-150.5 sm:h-160.5 sm:w-xl md:w-xl md:h-140  lg:mt-10 md:mt-20 sm:mt-35  md:rounded-t-2xl xl:rounded-r-none xl:rounded-l-2xl lg:rounded-r-none lg:rounded-l-2xl sm:rounded-t-2xl bg-[radial-gradient(circle,#0b2a31_0%,#071A1F_40%,#000000_100%)]">
          <div className="flex flex-col justify-center items-center mt-40 md:mt-20 xl:mt-30 sm:mt-20">
            <h1 className="text-3xl xl:text-5xl text-orange-600 font-extrabold">
              Be a Part Of
            </h1>
            <h1 className="text-5xl text-white font-extrabold">
              a Better India
            </h1>
            <p className="text-white text-xl font-bold mt-7 m-3">
              join our community and contribute towards
              <br /> building a stronger, brighter future for all
            </p>
          </div>

          <div className="flex gap-6 xl:gap-12 justify-center mt-10">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-orange-400 p-3 rounded-full border border-gray-800 shadow-lg">
                <img className="h-8 w-8 invert-95 sepia-200 saturate-1400 hue-rotate-[-30deg]" src={group} alt="stronger community" />
              </div>
              <p className="text-white text-sm font-medium leading-tight">
                Stronger <br /> Community
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-orange-400 p-3 rounded-full border border-gray-800 shadow-lg">
                <img className="h-8 w-8" src={secureIcon} alt="secure" />
              </div>
              <p className="text-white text-sm font-medium leading-tight">
                Secure <br /> & Trusted
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-orange-400 p-3 rounded-full border border-gray-800 shadow-lg">
                <img className="h-8 w-8" src={growIcon} alt="grow" />
              </div>
              <p className="text-white text-sm font-medium leading-tight">
                Grow <br /> Together
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 mb-15 justify-center">
            <Link
              to="/ReactHookForm"
              className="bg-orange-400 px-4 py-2  rounded-xl text-black font-semibold"
            >
              Register Here
            </Link>
          </div>
        </div>

        <div className="w-full max-w-xl xl:w-130 lg:w-130 md:w-160.5 md:h-140 xl:mt-4.5">
          <img
            src={image}
            className="w-130.5 md:w-150.5 h-120 md:h-140 xl:h-145.5 lg:h-150.5 sm:h-160 sm:w-xl object-cover   xl:rounded-r-2xl xl:rounded-l-none lg:rounded-l-none lg:rounded-r-2xl md:rounded-b-2xl sm:rounded-b-2xl mb-20  "
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
