import React, { Component } from 'react';
import Login from './auth/Login';
import { useNavigate } from 'react-router-dom';

class LoginPage extends Component {
    
    constructor() {  
        super()
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }
    
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data); 
        const { navigation } = this.props;
        navigation('/Dashboard');
    }


    render() {
        return (
            <div> 
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}

export default function(props) {
    const navigation = useNavigate(); 
    return <LoginPage {...props} navigation={navigation} />; 
}