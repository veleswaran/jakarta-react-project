import axios from "axios";
import React,{ Component } from "react";

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state ={
            users:[]
        }
    }

    componentDidMount(){
        let getUsers = async ()=> {
            const res = await axios.get("http://localhost:8080/jakarta-demo/api/users")
            if(res.status === 200){
                console.log(res.data)
                this.setState({
                    users:res.data
                })
            }
        }
        getUsers();
    }

    onDelete=(id)=>{
        let deleteUser = async()=>{
            const res = await axios.delete(`http://localhost:8080/jakarta-demo/api/users/${id}`)
            console.log(res)
        }
        deleteUser();
    }

    onEdit = (id)=>{
        console.log(id)
        localStorage.setItem("id",id)
        window.location.href = "/user/edit"
    }
    render(){
        return(
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state?.users?.map((val)=>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.role}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>this.onDelete(val.id)}>Delete</button>
                                    <button className="btn btn-warning ms-2" onClick={()=>this.onEdit(val.id)}>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}