import React, { Component } from 'react';
import Login from './auth/Login';
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
            </div>
        )
    }
}

export default function(props) {
    const navigation = useNavigate(); 
    return <LoginPage {...props} navigation={navigation} />; 
}