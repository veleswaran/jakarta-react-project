import axios from "axios";
import React, { Component } from "react";

export default class UserCreate extends Component {
    constructor(props){
        super(props)
        this.state ={
            users:{}
        }
    }
    onsubmit=async(e)=>{

        e.preventDefault();
        console.log("the user data is ",this.state.users)
        const res = await axios.post("http://localhost:8080/jakarta-demo/api/users",this.state?.users)
        if(res.status === 201){
            console.log("User created successfully")
            window.location.href = "/users"
        }
    }

    onchange=(e)=>{
        let {id,value}= e.target;
        this.setState({
            users:{...this.state.users,[id]:value}
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <h1>User Create </h1>
                <form onSubmit={this.onsubmit}>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text" name="name" id="username" className="form-control" onChange={this.onchange}/>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email" name="email" id="email" className="form-control" onChange={this.onchange}/>
                    </div>
                    <div className="mb-2">
                        <label>Password</label>
                        <input type="text" name="password" id="password" className="form-control" onChange={this.onchange}/>
                    </div>
                    <div className="mb-2">
                        <label>Role</label>
                        <select className="form-select" aria-label="Default select example" id="role" onChange={this.onchange}>
                            <option selected>Open this select menu</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary"/>

                </form>
            </div>
        )
    }
}