import axios from "axios";
import React, { Component } from "react";

export default class UserEdit extends Component {
    constructor(props){
        super(props)
        this.state ={
            user:{}
        }
    }
    componentDidMount(){
        const id = localStorage.getItem("id")
        let getUser = async()=>{
            let res = await axios.get(`http://localhost:8080/jakarta-demo/api/users/${id}`)
            this.setState({
                user:{...res.data}
            })
        }
        getUser();
    }
    onsubmit=async(e)=>{
        const  id = localStorage.getItem('id')
        e.preventDefault();
        console.log("the user data is ",this.state.user)
        const res = await axios.put(`http://localhost:8080/jakarta-demo/api/users/${id}`,this.state?.user)
        if(res.status === 200){
            console.log("User updated successfully")
            window.location.href = "/users"
        }
    }

    onchange=(e)=>{
        let {id,value}= e.target;
        this.setState({
            user:{...this.state.user,[id]:value}
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <h1>User Create </h1>
                <form onSubmit={this.onsubmit}>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text" name="name" id="username" className="form-control" onChange={this.onchange} value={this.state.user?.username}/>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email" name="email" id="email" className="form-control" onChange={this.onchange} value={this.state.user?.email}/>
                    </div>
                    <div className="mb-2">
                        <label>Password</label>
                        <input type="text" name="password" id="password" className="form-control" onChange={this.onchange} value={this.state.user?.password}/>
                    </div>
                    <div className="mb-2">
                        <label>Role</label>
                        <select className="form-select" aria-label="Default select example" id="role" onChange={this.onchange} value={this.state.user?.role}>
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