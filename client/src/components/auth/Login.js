import React, { Component } from 'react'; 
import axios from 'axios'

export default class Login extends Component {
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
        axios.post("http://localhost:3001/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password, 
            }
        }, 
            { withCredentials: true } 
        ).then(response => {
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
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
        return (
            <div> 
                <form onSubmit={e => this.handleSubmit(e)}> 
                    <input 
                        type="email"
                        name="email" 
                        placeholder="email" 
                        value={this.state.email}
                        onChange={e => this.handleChange(e)} 
                        required
                    /> 
                    <input 
                        type="password"
                        name="password" 
                        placeholder="password" 
                        value={this.state.password}
                        onChange={e => this.handleChange(e)} 
                        required
                    /> 
                    <button type="submit"> Login </button> 
                </form>
            </div>
        )
    }
}