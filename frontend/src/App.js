import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout.js";
import AboutUs from "./component/AboutUs.js";
import Careers from "./component/Career.js";
import UsersRouters from "./component/Routers/UsersRouters.js";
import ServiceRouters from "./component/Routers/ServicesRouters.js";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes>

                        {/* Home */}
                        <Route path="/" element={<>Home page</>} />

                        {/* USERS */}
                        <Route path="/users/*" element={<UsersRouters />} />

                        {/* SERVICES */}
                        <Route path="/services/*" element={<ServiceRouters />} />

                        {/* Other pages */}
                        <Route path="/about" element={<AboutUs/>} />
                        <Route path="/career" element={<Careers/>} />

                        {/* GLOBAL 404 */}
                        <Route 
                            path="*" 
                            element={
                                <img 
                                    src="https://quantum-guidance.vercel.app/not-found/404.jpeg" 
                                    alt="404 - page not found" 
                                    width="100%" 
                                    height="100%" 
                                />
                            } 
                        />

                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}
