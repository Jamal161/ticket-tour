import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <>
      
      <Navbar transparent />
    
      <main>
        <section className="relative w-full  min-h-screen">
          <div
            className="absolute w-full h-full bg-blueGray-200 "
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/register_bg_2.png").default + ")",
            // }}
          ></div>
         <div className=" pt-32">
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          </div>
          <Footer />
        </section>
        
      </main>
    </>
  );
}
