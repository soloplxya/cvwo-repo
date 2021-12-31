import React, { Component } from 'react'; 
import axios from 'axios'

export default class Registration extends Component {
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
        axios.post("http://localhost:3001/registrations", {
            user: {
                email: this.state.email,
                password: this.state.password, 
                password_confirmation: this.state.password_confirmation
            }
            }, 
            { withCredentials: true } 
        ).then(response => {
            if (response.data.status === "created") {
                console.log('a')
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
                    <input 
                        type="password"
                        name="password_confirmation" 
                        placeholder="password confirmation" 
                        value={this.state.password_confirmation}
                        onChange={e => this.handleChange(e)} 
                        required
                    /> 
                    <button type="submit"> Register </button> 
                </form>
            </div>
        )
    }
}