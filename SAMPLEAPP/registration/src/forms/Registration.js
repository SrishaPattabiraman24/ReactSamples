import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';
import InputWithLabels from './InputWithLabels';

function validate(fname, lname, emailid, phoneno) {
    const errors = []; 
    if (fname.length === 0) {
      errors.push("First Name can't be empty");
    }
    if (lname.length === 0) {
        errors.push("\nLast Name can't be empty");
    }
    if (emailid.length === 0) {
        errors.push("\nEmailid can't be empty");
    }else{
        if(!EmailValidator.validate(emailid)){
            errors.push("\nEmailid is not valid");
        }
    }
    if (phoneno.length === 0) {
        errors.push("\nPhoneno can't be empty");
    }else{
        if (phoneno.length < 10) {
            errors.push("\nPhone no should be at least 10 characters long");
        }
    }
    return errors;
  }

class Registration extends Component{

    state = {
        fname: '',
        lname: '',
        emailid: '',
        gender: ["Male","Female"],
        phoneno: '',
        errors: [],
        data: [],
        genderValue : 'Male',
    }

    constructor(props){
        super(props)
        this.fname = {
            min:3,
            max:8,
            name:'fname',
            value:this.state.fname,
            onChange:this.handleOnChange,
            label:"First Name : ",
        };
        this.lname = {
            min:3,
            max:8,
            name:'lname',
            value:this.state.lname,
            onChange:this.handleOnChange,
            label:"Last Name : ",
        };
        this.emailid = {
            name:'emailid',
            value:this.state.emailid,
            onChange:this.handleOnChange,
            label:"Emailid : ",
        };
        this.phoneno = {
            max:10,
            name:'phoneno',
            value:this.state.phoneno,
            onChange:this.handleOnChange,
            label:"Phone no : ",
        };

    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
        if(this[event.target.name]){
            this[event.target.name].value = event.target.value;
        }

    }

    handleOnBlur = e => {
        console.log("inside blur change",e.target.value);
    }

    handleChange = (e) => {
        this.setState({genderValue : e.target.value});
    }

    submit = (e) => {
        e.preventDefault();
        const {fname, lname, emailid, phoneno, data, genderValue} = this.state;
        const errors = validate(fname, lname, emailid, phoneno);
        if (errors.length > 0) {
            alert(errors);
            return;
        }else{
            data.push(fname);
            data.push(lname);
            data.push(emailid);
            data.push(phoneno);
            data.push(genderValue);
        }   
        this.props.whenSubmitted(data);
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <InputWithLabels {...this.fname} />
                <br></br>
                <InputWithLabels {...this.lname} />
                <br></br>
                <InputWithLabels {...this.emailid} />
                <br></br>
                <InputWithLabels {...this.phoneno} />
                <br></br>
                Gender : <select value={this.state.genderValue} onChange={this.handleChange} >
                   {this.state.gender.map(value => (
                       <option value={value}>{value}</option>
                   ))}
                </select>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default Registration