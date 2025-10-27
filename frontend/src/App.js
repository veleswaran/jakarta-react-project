import React,{ Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from "./component/users/UserCreate.js";
import UserList from "./component/users/UserList.js";
import UserEdit from "./component/users/UserEdit.js";

export default class App extends Component{
    render(){
        return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Home page</>}/>
                <Route path="/user/create" element={<UserCreate/>} />
                <Route path="/users" element={<UserList/>} />
                <Route path="/user/edit" element={<UserEdit/>} />
            </Routes>
        </BrowserRouter>
        );
    }
}