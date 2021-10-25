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

    cancel = () => {
        this.props.history.push('/');
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
                            <label> First Name: { this.state.user.fname }</label>
                            <br></br>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Last Name: { this.state.user.lname }</label>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Entry Date: { this.state.user.entrydate }</label>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Entry Time: { this.state.user.entrytime }</label>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Glucose Entered: { this.state.user.glucose }</label>
                        </div>
                        <br></br>

                        <div className = "row">
                            <label> Glucose In Range?: { this.state.user.in_range }</label>
                        </div>
                        <br></br>

                        <button className = "btn btn-info" onClick = {this.cancel} >Return</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewUser