import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col xl:flex-row lg:flex-row  md:flex-row sm:flex-row sm:gap-50 justify-between items-center px-10  py-4 bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="shrink-0">
        <h1 className="text-2xl font-bold text-orange-300">My Website</h1>
      </div>
      <div className="flex  w-full md:w-auto gap-4 md:gap-5 mt-2 md:mt-0 ">
        <div className="flex mt-3 gap-5">
          <Link to="/" className="hover:text-orange-400 whitespace-nowrap">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-400 whitespace-nowrap">
            About
          </Link>
          <Link
            to="/benifit"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Benifits
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Contacts
          </Link>
        </div>
        <div className="mt-3 hidden xl:block lg:block">
          <Link
            to="/ReactHookForm"
            className="bg-orange-400 px-4 py-2 rounded-xl text-black font-semibold"
          >
            Register Here
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
