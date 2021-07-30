// Import dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * Consctruct the component.
 *
 * @param {Object} props
 */
const Authentication = props => {

    return (
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
                                        <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="authentication__form-label" htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary authentication__form-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Authentication;