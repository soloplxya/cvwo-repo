import React, { Component } from 'react'; 
import { config } from '../../Constants';
import axios from 'axios';


export default class Registration extends Component {
    API_REGISTRATION_URL = config.url.API_REGISTRATION_URL;
    constructor(props) {
        super(props); 

        this.state = {
            email: "", 
            password: "", 
            password_confirmation: "", 
            registrationErrors: "" 
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
    }

    handleSubmit(event) {
        // use axios to connect to the rails api
        axios.post(this.API_REGISTRATION_URL, {
            user: {
                email: this.state.email,
                password: this.state.password, 
                password_confirmation: this.state.password_confirmation
            }
            }, 
            { withCredentials: true } 
        ).then(response => {
            if (response.data.status === "created") {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("registration error", error)
        })
        
        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div> 
                <main style={{display: "flex", justifyContent: "center"}}>
                    <form onSubmit={e => this.handleSubmit(e)}> 
                        <div style={{ display:"flex", justifyContent:"center"}}>
                            <div style={{ display: "flex", justifyContent:"space-between", flexDirection: "column"}}>
                                <label htmlFor="registerEmail"> Email Address </label> 
                                <input 
                                    id="registerEmail"
                                    type="email"
                                    name="email" 
                                    className="todo-input"
                                    placeholder="email" 
                                    value={this.state.email}
                                    style={{ width: "100%"}}
                                    onChange={e => this.handleChange(e)} 
                                    required
                                /> 
                                <label htmlFor="registerPassword"> Password </label> 
                                <input 
                                    id="registerPassword"
                                    type="password"
                                    name="password" 
                                    className="todo-input"
                                    placeholder="password" 
                                    value={this.state.password}
                                    style={{ width: "100%"}}
                                    onChange={e => this.handleChange(e)} 
                                    required
                                /> 
                                <label htmlFor="registerPasswordConfirmation"> Password Confirmation </label> 
                                <input 
                                    id="registerPasswordConfirmation"
                                    type="password"
                                    name="password_confirmation" 
                                    className="todo-input"
                                    placeholder="password confirmation" 
                                    style={{ width: "100%"}}
                                    value={this.state.password_confirmation}
                                    onChange={e => this.handleChange(e)} 
                                    required
                                /> 
                                <button 
                                    type="submit"
                                    className="todo-button"
                                    style={{marginTop: "20px"}}
                                > Register </button> 
                            </div>
                        </div>
                    </form>
                </main> 
            </div>
        )
    }
}