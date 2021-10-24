import React, { Component } from 'react';
import UserService from '../services/UserService';

 class ViewUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){

        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
             <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">

                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.user.fname }</div>
                            <br></br>
                        </div>

                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lname }</div>
                        </div>

                        <div className = "row">
                            <label> Entry Date: </label>
                            <div> { this.state.user.entrydate }</div>
                        </div>

                        <div className = "row">
                            <label> Entry Time: </label>
                            <div> { this.state.user.entrytime }</div>
                        </div>

                        <div className = "row">
                            <label> Glucose Entered: </label>
                            <div> { this.state.user.glucose }</div>
                        </div>

                        <div className = "row">
                            <label> Glucose In Range?: </label>
                            <div> { this.state.user.in_range }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewUser