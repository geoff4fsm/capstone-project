import React, { Component } from 'react';
import UserService from '../services/UserService';



class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            fname: "",
            lname: "",
            entrydate: "",
            entrytime: "",
            glucose: 0,
            in_range: "",
            note: ""

        }

        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changeEntryDateHandler = this.changeEntryDateHandler.bind(this);
        this.changeEntryTimeHandler = this.changeEntryTimeHandler.bind(this);
        this.changeGlucoseHandler = this.changeGlucoseHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {

        if (this.state.id === 'add') {

            return

        } else {

            UserService.getUserById(this.state.id).then(res => {

                let user = res.data;

                this.setState({

                    fname: user.fname,
                    lname: user.lname,
                    entrydate: user.entrydate,
                    entrytime: user.entrytime,
                    glucose: user.glucose,
                    in_range: user.in_range,
                    note: user.note

                });
            });
        }
    }

    saveUser = (e) => {

        e.preventDefault();

        let user = {

            fname: this.state.fname,
            lname: this.state.lname,
            entrydate: this.state.entrydate,
            entrytime: this.state.entrytime,
            glucose: this.state.glucose,
            in_range: this.state.in_range,
            note: this.state.note

        };

        if (this.state.id === 'add') {

            UserService.createUser(user).then(res => {

                this.props.history.push('/users');

            });

        } else {

            UserService.updateUser(user, this.state.id).then(res => {

                this.props.history.push('/users');

            });
        }
    }

    cancel = () => {
        this.props.history.push('/');
    }

    changeFnameHandler = (event) => {
        this.setState({ fname: event.target.value });
    }

    changeLnameHandler = (event) => {
        this.setState({ lname: event.target.value });
    }

    changeEntryDateHandler = (event) => {
        this.setState({ entrydate: event.target.value });
    }

    changeEntryTimeHandler = (event) => {
        this.setState({ entrytime: event.target.value });
    }

    changeGlucoseHandler = (event) => {
        this.setState({ glucose: event.target.value });

        const gluc = event.target.value;
        const inRange = gluc <= 70 ? "Low Treat Now" :
            gluc > 70 && gluc < 90 ? "Low" :
                gluc >= 90 && gluc <= 150 ? "In Range" :
                    gluc > 150 && gluc < 240 ? "High" :
                        "High Treat Now";

        this.setState({ in_range: inRange })

    }

    changeNoteHandler = (event) => {
        this.setState({ note: event.target.value });
    }

    getHeader = () => {
        if (this.state.id === "add") {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            {
                                this.getHeader()
                            }

                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label> First Name </label>
                                        <input placeholder="First Name" name="fname" className="form-control"
                                            value={this.state.fname} onChange={this.changeFnameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Last Name </label>
                                        <input placeholder="Last Name" name="lname" className="form-control"
                                            value={this.state.lname} onChange={this.changeLnameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Date </label>
                                        <input placeholder="Entry Date" name="date" className="form-control"
                                            value={this.state.entrydate} onChange={this.changeEntryDateHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Time </label>
                                        <input placeholder="Entry Time" name="time" className="form-control"
                                            value={this.state.entrytime} onChange={this.changeEntryTimeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Glucose </label>
                                        <input placeholder="Enter Glucose" name="glucose" className="form-control"
                                            value={this.state.glucose} onChange={this.changeGlucoseHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Note </label>
                                        <input placeholder="Enter Note If Needed" name="note" className="form-control"
                                            value={this.state.note} onChange={this.changeNoteHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUser