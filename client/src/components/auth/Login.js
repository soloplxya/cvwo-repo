import React, { Component } from 'react'
import { config } from '../../Constants';
import axios from 'axios'

export default class Login extends Component {
    API_SESSIONS_URL = config.url.API_SESSIONS_URL;
    constructor(props) {
        super(props); 

        this.state = {
            email: "", 
            password: "",  
            loginErrors: "" 
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }

    
    handleSubmit(event) {
        // use axios to connect to the rails api
        axios.post(this.API_SESSIONS_URL, {
            user: {
                email: this.state.email,
                password: this.state.password, 
            }
        }, 
            { withCredentials: true } 
        ).then(response => {
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
            } else {
                this.props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            console.log("login error", error)
        })
        
        event.preventDefault();
    }

    handleChange(event) {
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const loginField = {
            maxWidth : "500px"
        };

        return (
            <div> 
                <main>
                    <form onSubmit={e => this.handleSubmit(e)}> 
                        <div style={{ display:"flex", justifyContent:"center"}}>
                            <div style={{ display: "flex", justifyContent:"space-between", flexDirection: "column" }}>
                                <h1> Login </h1>
                                <label htmlFor="loginEmail"> Email Address </label> 
                                <input 
                                    id="loginEmail"
                                    className="todo-input"
                                    type="email"
                                    name="email" 
                                    placeholder="email" 
                                    value={this.state.email}
                                    style={{width: "100%"}}
                                    onChange={e => this.handleChange(e)} 
                                    required
                                /> 
                                <label htmlFor="loginPassword"> Password </label> 
                                <input 
                                    id="loginPassword"
                                    className="todo-input"
                                    type="password"
                                    name="password" 
                                    placeholder="password" 
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)} 
                                    style={{width: "100%"}}
                                    required
                                /> 
                                <button 
                                    className="todo-button"
                                    style={{ width: "200px", marginTop:"20px"}}
                                    type="submit"> Login 
                                </button> 
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}> 
                                    { this.props.wrongPassword 
                                        ? <text style={{color: "black"}}> Wrong details! </text> 
                                        : <div />
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </main>
            </div>
        )
    }
}