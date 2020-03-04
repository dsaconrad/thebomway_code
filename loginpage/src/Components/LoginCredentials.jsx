import React from "react";
import {Col, Button, Form, FormGroup} from 'reactstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Credentials extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col" />
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <Form>
                        <FormGroup row>
                            <Col/>
                            <Col sm={5}>
                                {/* "changeName" calls a function that changes the state of "name" every time the value of the feild is updated */}
                                <div className="input-container">
                                    <i className="fa fa-user icon fa-2x" />
                                    <input className="input-field" type="text" placeholder="USERNAME" name="username"/>
                                </div>
                            </Col>
                            <Col/>
                        </FormGroup>
                        <FormGroup row>
                            <Col/>
                            <Col sm={5}>
                                {/* "changeName" calls a function that changes the state of "name" every time the value of the feild is updated */}
                                <div className="input-container">
                                    <i className="fa fa-lock icon fa-2x" />
                                    <input className="input-field" type="password" placeholder="PASSWORD" name="password"/>
                                </div>
                            </Col>
                            <Col/>
                        </FormGroup>
                        <FormGroup row>
                            <Col/>
                            <Col sm={5}>
                                <Router>
                                    <div className="login-trouble">
                                        <Link to="/"><p>Trouble Logging In?</p></Link>
                                        <Link to="/"><p>Reset Password</p></Link>
                                    </div>
                                </Router>
                            </Col>
                            <Col/>
                        </FormGroup>
                        <FormGroup row>
                            <Col/>
                            <Col sm={5}>
                                <div className="Login-button-container">
                                    <Button className="Login-Button">Login</Button>
                                </div>
                            </Col>
                            <Col/>
                        </FormGroup>
                    </Form>

                </div>
                <div className="col" />
            </div>
        )
    }
}

export default Credentials;