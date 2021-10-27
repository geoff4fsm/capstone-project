import React, { Component } from 'react';
import UserService from '../services/UserService';

class ViewUser extends Component {

    constructor(props) {
        super(props)

        // state for user by user id

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }
    // return to home List page

    cancel = () => {
        this.props.history.push('/');
    }

    componentDidMount() {

        // assign view data by user id

        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div>               
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center text-white"> View User Details</h3>
                    <div className="card-body">

                        // table for user 

                        <div className="row">
                            <label> First Name: {this.state.user.fname}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Last Name: {this.state.user.lname}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Entry Date: {this.state.user.entrydate}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Entry Time: {this.state.user.entrytime}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Glucose Entered: {this.state.user.glucose}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Glucose In Range?: {this.state.user.in_range}</label>
                        </div>
                        <br></br>

                        <div className="row">
                            <label> Note: {this.state.user.note}</label>
                        </div>
                        <br></br>

                        // button to return to home List user page

                        <button className="btn btn-info" onClick={this.cancel} >Return</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewUser