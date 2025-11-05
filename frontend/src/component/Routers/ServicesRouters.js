import React,{ Component } from "react";
import { Routes, Route } from "react-router-dom";

export default class ServiceRouters extends Component{
    render() {
        return (
            <Routes>
                <Route path="/" element={<h1>Service Home</h1>} />
                <Route path="info" element={<h1>Service Info</h1>} />
                <Route path="*" element={<img src="https://quantum-guidance.vercel.app/not-found/404-service.png" alt="service page url not found" width="100%" height="100%" />} />
            </Routes>
        );
    }
}
