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
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}