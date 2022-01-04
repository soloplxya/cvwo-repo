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
        this.props.handleLogin(data); 
        const { navigation } = this.props;
        navigation('/Dashboard');
    }

    


    render() {
        return (
         <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
            <main> 
                <div> 
                    <h1> Register </h1>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    <Link to='/LoginPage' style={{display: "flex", justifyContent: "center"}}> Registered user? Click here to login. </Link> 
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