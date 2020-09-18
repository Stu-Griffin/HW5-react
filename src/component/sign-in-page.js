import React, {Component} from 'react';
import './styles/style.css';
import {Container, Box, LogoBox, Logo, Input, Checkbox, Button, Text, MainText, BoxContent} from './styles/style-components.js';
import logo from '../assets/img/padlock.svg';
import {Link} from "react-router-dom";
class SignInPage extends Component {
    state = {
        EmailAddress: "",
        Password: "",
        CheckButton: false,
        nameForEmailInput: "",
        nameForPasswordInput: ""
    }
    SaveEmailAddress = (event) => {
        this.setState({
            EmailAddress: event.target.value
        })
    }
    SavePassword = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    CheckInf = () => {
        if(((this.state.EmailAddress) === (localStorage.getItem("EmailAddress"))) && ((this.state.Password) === (localStorage.getItem("Password")))) {
            alert('ok, come in')
        } else {
            alert("who are you?")
        }
    }
    CheckButton = () => {
        this.setState({
            CheckButton: !this.state.CheckButton
        })
    }
    render() {
        return(
            <div>
                <Container>
                    <Box>
                        <LogoBox>
                            <Logo src={logo}/>
                        </LogoBox>
                        <MainText>Sign In</MainText>
                    </Box>
                    <Box>
                        <Input placeholder="Email Address*" value={this.state.EmailAddress} onChange={this.SaveEmailAddress}/>
                        <Input placeholder="Password*" value={this.state.Password} onChange={this.SavePassword}/>
                        <BoxContent>
                            <div className="checkbox">
                                <Checkbox onClick={this.CheckButton} className="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo"/>
                                <label htmlFor="color-1"></label>
                            </div>
                            <Text>Remember me</Text>
                        </BoxContent>
                    </Box>
                    <Box>
                        <Button onClick={this.CheckInf}>Sign In</Button>
                        <BoxContent style={{justifyContent: `space-between`}}>
                            <Text>Forgot Password?</Text>
                            <Link to="/sign-up">Don't have an account?</Link>
                        </BoxContent>
                    </Box>
                    <Box></Box>
                </Container>
            </div>
        )
    }
}
export default SignInPage;