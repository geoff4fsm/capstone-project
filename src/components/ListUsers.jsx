import React, { Component } from 'react';
import UserSevice from '../services/UserSevice';

class ListUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
    }

    addUser = () => {
        this.props.history.push('/add-user/_add');
    }

    editUser = (id) => {
        this.props.history.push(`/add-user/${id}`);
    }

    viewUser = (id) => {
        this.props.history.push(`/view-user/${id}`);
    }

    deleteUser = (id) => {
        UserSevice.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)}); 
        })
        
    }

    componentDidMount = () => {
        UserSevice.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Users List</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addUser}> Add User </button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User First Name </th>
                                <th> User Last Name </th>
                                <th> Entry Date </th>
                                <th> Entry Time </th>
                                <th> Entered Glucose </th>
                                <th> In Range? </th>
                                <th> Notes </th>
                                <th> Actions </th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.id}>
                                        <td> { user.fname}</td>
                                        <td> { user.lname}</td>
                                        <td> { user.entrydate}</td>
                                        <td> { user.entrytime}</td>
                                        <td> { user.glucose}</td>
                                        <td> { user.in_range}</td>
                                        <td> { user.note}</td>
                                        <td>
                                            <button onClick = { () => this.editUser(user.id)} className = "btn btn-info">Update</button>
                                            <button style = {{marginLeft: "10px"}} onClick = { () => this.deleteUser(user.id)} className = "btn btn-danger">Delete</button>
                                            <button style = {{marginLeft: "10px"}} onClick = { () => this.viewUser(user.id)} className = "btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>                    
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUsers;