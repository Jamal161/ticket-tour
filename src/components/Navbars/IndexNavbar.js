/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ">
         
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
            GIC TICKET
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
             
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
           
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            

              
                 <Link
          to="/auth/login"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          <li className="flex items-center">
                <button
                  className="bg-indigo-500 text-white  font-semi-bold  px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  
                >
                   Sign In
                </button>
                </li>
        </Link>
              
            </ul>
          </div>
        </div>
      </nav>
       <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://ik.imagekit.io/w13m3d3rhif/web/homepage/homepage-background.jpg?tr=f-auto,pr-true')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute  "
            ></span>
          </div>
          </div>
    </>
  );
}
