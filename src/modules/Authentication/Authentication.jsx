// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AuthenticationData from './Authentication.json';

class Authentication extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rememberMe: false,
            bypassLogin: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange (e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }

    handleErrors () {
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        if (username instanceof HTMLElement) {
            if (this.state.username !== AuthenticationData.username) {
                username.classList.remove('is-valid');
                username.classList.add('is-invalid');
            } else {
                username.classList.remove('is-invalid');
                username.classList.add('is-valid');
            }
        }

        if (password instanceof HTMLElement) {
            if (this.state.password !== AuthenticationData.password) {
                password.classList.remove('is-valid');
                password.classList.add('is-invalid');
            } else {
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
            }
        }
    }

    setBypassLogin (bypass) {
        const localStorage = window.localStorage;

        localStorage.setItem('bypassLogin', bypass ? bypass : 'temp' );
    }

    handleSubmit (e) {
        e.preventDefault();

        if (this.state.username === AuthenticationData.username &&
            this.state.password === AuthenticationData.password
        ) {
            this.setBypassLogin(this.state.rememberMe);

            location.reload();
        } else {
            this.handleErrors();
        }
    }

    getBypassLogin () {
        const localStorage = window.localStorage;
        const savedBypass = localStorage.getItem('bypassLogin');
        let bypassLogin = false;

        if (savedBypass == 'true' ||
            savedBypass == 'temp'
        ) {
            bypassLogin = true;
        }

        return {
            bypassLogin,
            tempBypass: savedBypass == 'temp'
        };
    }

    componentDidMount () {
        const { bypassLogin, tempBypass} = this.getBypassLogin();

        if (!bypassLogin) {
            this.setState({
                bypassLogin: false
            });
        } else if (tempBypass) {
            window.localStorage.setItem('bypassLogin', false);
        }
    }

    render () {
        const env = AuthenticationData.env;

        return (
            (!this.state.bypassLogin && env === 'stage') &&
            <section className="authentication">
                <Container>
                    <Row>
                        <Col>
                            <div className="authentication__inner">
                                <div className="authentication__form-wrapper">
                                    <h1 className="authentication__heading">Login</h1>

                                    <form className="authentication__form">
                                        <div className="form-group mb-4">
                                            <label className="authentication__form-label" htmlFor="username">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" autoComplete="true" onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-group mb-4">
                                            <label className="authentication__form-label" htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="true" onChange={this.handleInputChange} />
                                        </div>

                                        <div className="form-check mb-4">
                                            <input type="checkbox" className="form-check-input" id="rememberMe" onChange={this.handleInputChange} />
                                            <label className="form-check-label" htmlFor="rememberMe" aria-describedby="rememberMeHelp">Bypass login</label>
                                            <small id="rememberMeHelp" className="d-block form-text text-muted">Bypass this login the next time I visit.</small>
                                        </div>

                                        <button type="submit" className="btn btn-primary authentication__form-submit" onClick={this.handleSubmit}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
};

export default Authentication;