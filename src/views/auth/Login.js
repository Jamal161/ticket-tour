import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-1/2  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-1">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-black text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                
                  <button
                    className="border-2 bg-blueGray-500  text-black font-normal px-12 py-2 rounded outline-none focus:outline-none mr-1 mb-1 inline-flex items-center text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-4"
                      src={require("assets/img/google.svg").default}
                    />
                    Login with Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-500" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-black text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-1 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-1 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-black">
                        Remember me
                      </span>
                    </label>
                  </div>
                    
                     {/* <div >
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-black"
                >
                 Forgot password?
                </a>
              </div> */}
             
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white  font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                     
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                 <div className="pt-2 text-black">
                  Don't have an Account ?     . 
                   <button
                      className="bg-blueGray-800 text-white mr-2 rounded px-2 "
                     
                    >
                <Link to="/auth/register" >
                  Sign Up  
                </Link>
                </button>
              </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
