import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.updateMail = this.updateMail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    };

    updateMail(e) {
        e.preventDefault();
        this.setState({email: e.target.value})
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({password: this.encodePassword(e.target.value)})

    }

    encodePassword(phrase) {
        return btoa(phrase)
    }

    submit(e) {
        e.preventDefault()
        const {email, password} = this.state;
        console.log(email, password);
        this.props.saveUser({email, password})
    }

    render() {
        return (
            <main>
                <h1>{this.props.message || "You smell of old cheese"}</h1>
                <p onClick = {() => console.log(this.state)}>THis is where some of my beautiful text foes</p>
                <form id="landing-login">
                    <input id="login-email" type="text" placeholder="email" onChange={this.updateMail}></input>
                    <input id="login-password" type="password" onChange={this.updatePassword}></input>
                    <button id="login-submit" onClick={this.submit}>Log me in</button>
                </form>
            </main>
        )
    };

}