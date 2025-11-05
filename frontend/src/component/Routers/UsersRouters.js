import React,{ Component } from "react";
import { Routes, Route } from "react-router-dom";
import UserCreate from "../users/UserCreate.js";
import UserList from "../users/UserList.js";
import UserEdit from "../users/UserEdit.js";

export default class UsersRouters extends Component {
    render() {
        return (
            <Routes>
                <Route path="/create" element={<UserCreate />} />
                <Route path="/" element={<UserList />} />
                <Route path="/edit" element={<UserEdit />} />
                <Route path="*" element={<img src="https://quantum-guidance.vercel.app/not-found/404-user.png" alt="user page url not found" width="100%" height="100%" />}/>
            </Routes>
        );
    }
}