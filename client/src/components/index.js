import React, { Component } from 'react';
import Registration from './auth/Registration';
import  { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

class Index extends Component {
    
    constructor() {  
        super()
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }
    
    handleSuccessfulAuth(data) {
        const { navigation } = this.props;
        try {
            this.props.handleLogin(data);  
            navigation('/Dashboard');
        } catch (exception) {
            console.log(exception); 
            navigation('/Unauthorised');
        }
    }


    render() {
        return (
         <div>
            <main> 
                <div> 
                    <h1> Register </h1>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    <Link to='/LoginPage' style={{display: "flex", justifyContent: "center", marginTop:"10px"}}> Registered user? Click here to login. </Link> 
                </div>
            </main>
        </div>
        )
    }
}

export default function(props) {
    const navigation = useNavigate(); 
    return <Index {...props} navigation={navigation} />; 
}