import React, {Component} from 'react';
import './styles/style.css';
import {Container, Box, LogoBox, Logo, Input, Checkbox, Button, Text, MainText, BoxContent} from './styles/style-components.js';
import logo from '../assets/img/padlock.svg';
import {Link} from "react-router-dom";
const nameRegExp = /^[a-z]{3,}/i;
const emailRegEx = /^[a-z]{3,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,}$/i;
const passwordRegEx = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}/;
class SignUpPage extends Component {
    state = {
        classForInput: "",
        booleanForClassForName: null,
        booleanForClassForLastName: null,
        booleanForClassForEmailAddress: null,
        booleanForClassForPassword: null,
        nameRegExp: nameRegExp,
        emailRegEx: emailRegEx, 
        passwordRegEx: passwordRegEx,
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        Password: "",
    }
    SaveFirstName = (event) => {
        this.setState({
            FirstName: event.target.value,
        })
        if (this.state.FirstName.match(nameRegExp)) {
            this.setState({
                booleanForClassForName: true,
            })
        } else {
            this.setState({
                booleanForClassForName: false,
            })
        }
    }
    SaveLastName = (event) => {
        this.setState({
            LastName: event.target.value
        })
        if (this.state.LastName.match(nameRegExp)) {
            this.setState({
                booleanForClassForLastName: true,
            })
        } else {
            this.setState({
                booleanForClassForLastName: false,
            })
        }
    }
    SaveEmailAddress = (event) => {
        this.setState({
            EmailAddress: event.target.value
        })
        if (this.state.EmailAddress.match(emailRegEx)) {
            this.setState({
                booleanForClassForEmailAddress: true,
            })
        } else {
            this.setState({
                booleanForClassForEmailAddress: false,
            })
        }
    }
    SavePassword = (event) => {
        this.setState({
            Password: event.target.value
        })
        if (this.state.Password.match(passwordRegEx)) {
            this.setState({
                booleanForClassForPassword: true,
            })
        } else {
            this.setState({
                booleanForClassForPassword: false,
            })
        }
    }
    SaveInLocalStorage = () => {
        if((this.state.FirstName.match(nameRegExp))&&
        (this.state.LastName.match(nameRegExp))&&
        (this.state.EmailAddress.match(emailRegEx))&&
        (this.state.Password.match(passwordRegEx))) {
            localStorage.setItem("FirstName", this.state.FirstName);
            localStorage.setItem("LastName", this.state.LastName);
            localStorage.setItem("EmailAddress", this.state.EmailAddress);
            localStorage.setItem("Password", this.state.Password);
        } else {
            console.log("something went wrong")
        }
    }
    render() {
        return(
            <div>
                <Container>
                    <Box>
                        <LogoBox>
                            <Logo src={logo}/>
                        </LogoBox>
                        <MainText>Sign Up{this.state.classForInput}</MainText>
                    </Box>
                    <Box>
                        <BoxContent>
                            <Input placeholder="First Name*"  className={(this.state.booleanForClassForName === true)? "correct" : (this.state.booleanForClassForName === false)? "incorrect" : ""} value={this.state.FirstName} onChange={this.SaveFirstName}/>
                            <Input placeholder="Last Name*" className={(this.state.booleanForClassForLastName === true)? "correct" : (this.state.booleanForClassForLastName === false)? "incorrect" : ""} value={this.state.LastName} onChange={this.SaveLastName}/>
                        </BoxContent>
                        <Input placeholder="Email Address*" className={(this.state.booleanForClassForEmailAddress === true)? "correct" : (this.state.booleanForClassForEmailAddress === false)? "incorrect" : ""} value={this.state.EmailAddress} onChange={this.SaveEmailAddress}/>
                        <Input placeholder="Password*" className={(this.state.booleanForClassForPassword === true)? "correct" : (this.state.booleanForClassForPassword === false)? "incorrect" : ""} type="password" value={this.state.Password} onChange={this.SavePassword}/>
                        <BoxContent style={{justifyContent: `space-around`}}>
                            <div className="checkbox">
                                <Checkbox className="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
                                <label htmlFor="color-1"></label>
                            </div>
                            <Text style={{width: `91%`}}>I want to receive inspiration, marketing promotions and updates via email</Text>
                        </BoxContent>
                    </Box>
                    <Box>
                        <Button onClick={this.SaveInLocalStorage}>Sign Up</Button>
                        <Link to="/sign-in">Already have an account? Sign In</Link>  
                    </Box>
                    <Box></Box>
                </Container>
            </div>
        )
    }
}
export default SignUpPage;