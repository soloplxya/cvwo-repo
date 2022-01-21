import React, { Component } from 'react';
import Login from './auth/Login';
import  { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


class LoginPage extends Component {
    
    constructor(props) {  
        super(props)
        this.state = {
            wrongPassword: false
        }
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this)
    }
    
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data); 
        const { navigation } = this.props;
        navigation('/Dashboard');
    }

    handleUnsuccessfulAuth() {
        this.setState({
            wrongPassword: true,
        });
    }


    render() {
        return (
            <div> 
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} handleUnsuccessfulAuth={this.handleUnsuccessfulAuth} wrongPassword={this.state.wrongPassword}/>
                <Link to='/' style={{display: "flex", justifyContent: "center", marginTop:"10px"}}> Yet to register? Click here to login. </Link> 
            </div>   
        )
    }
}

export default function(props) {
    const navigation = useNavigate(); 
    return <LoginPage {...props} navigation={navigation} />; 
}