import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from "./component/users/UserCreate.js";
import UserList from "./component/users/UserList.js";
import UserEdit from "./component/users/UserEdit.js";
import Layout from "./component/layout/Layout.js";
import AboutUs from "./component/AboutUs.js";
import Careers from "./component/Career.js";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/jakarta-demo">
                <Layout>
                    <Routes>
                        <Route path="/" element={<>Home page</>} />
                        <Route path="/user/create" element={<UserCreate />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/user/edit" element={<UserEdit />} />
                        <Route path="/about" element={<AboutUs/>} />
                        <Route path="/career" element={<Careers/>} />
                         <Route path="*" element={<img src="https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1762992000&v=beta&t=WV6_N_yd3T1l4nq72sw3T-wvLQEPUe4giK4loanCcrU" alt="404 - page not found" width="100%" height="100%" />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}