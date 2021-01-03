import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <main>
                <h1>{this.props.message || "You smell of old cheese"}</h1>
                <p>THis is where some of my beautiful text foes</p>
                <form id="landing-login">
                    <input id="login-email" type="text" placeholder="email"></input>
                    <input id="login-password" type="password"></input>
                    <button id="login-submit">Log me in</button>
                </form>
            </main>
        )
    }
    

}