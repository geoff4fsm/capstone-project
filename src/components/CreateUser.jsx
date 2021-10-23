import React, { Component } from 'react';
import UserSevice from '../services/UserSevice';

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

        if(this.state.id === '_add') {

            return

        } else {

            UserSevice.getUserById(this.state.id).then( res => {

                let user = res.data;
console.log(user)
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

        console.log('user => ' + JSON.stringify(user));

        if(this.state.id === '_add') {

            UserSevice.createUser(user).then(res => {

                this.props.history.push('/users');

             });   

        } else {

                UserSevice.updateUser(user, this.state.id).then( res => {

                    this.props.history.push('/users');

                });
            }
    }

    cancel = () => {
        this.props.history.push('/');
    }

    changeFnameHandler = (event) => {
        this.setState({fname: event.target.value});
    }

    changeLnameHandler = (event) => {
        this.setState({lname: event.target.value});
    }

    changeEntryDateHandler = (event) => {
        this.setState({entrydate: event.target.value});
    }

    changeEntryTimeHandler = (event) => {
        this.setState({entrytime: event.target.value});
    }

    changeGlucoseHandler = (event) => {
        this.setState({glucose: event.target.value});
    }

    changeNoteHandler = (event) => {
        this.setState({note: event.target.value});
    }

    render() {
        return (
            <div>
                <div className = "container">

                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                            <h3 className = "text-center"> Add User </h3>

                            <div className = "card-body">

                                <form>

                                    <div className = "form-group">
                                        <label> First Name </label>
                                        <input placeholder = "First Name" name = "fname" className = "form-control"
                                            value = {this.state.fname} onChange = {this.changeFnameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Last Name </label>
                                        <input placeholder = "Last Name" name = "lname" className = "form-control"
                                            value = {this.state.lname} onChange = {this.changeLnameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Date </label>
                                        <input placeholder = "Entry Date" name = "date" className = "form-control"
                                            value = {this.state.entrydate} onChange = {this.changeEntryDateHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Time </label>
                                        <input placeholder = "Entry Time" name = "time" className = "form-control"
                                            value = {this.state.entrytime} onChange = {this.changeEntryTimeHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Glucose </label>
                                        <input placeholder = "Enter Glucose" name = "glucose" className = "form-control"
                                            value = {this.state.glucose} onChange = {this.changeGlucoseHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Note </label>
                                        <input placeholder = "Enter Note If Needed" name = "note" className = "form-control"
                                            value = {this.state.note} onChange = {this.changeNoteHandler}/>
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveUser}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "10px" }}>Cancel</button>
                                 
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