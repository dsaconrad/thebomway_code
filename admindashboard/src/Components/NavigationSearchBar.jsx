import React from "react";
import {Col, Form, FormGroup} from 'reactstrap';

export default class NavigationSearchBar extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Col>
                        {/* "changeName" calls a function that changes the state of "name" every time the value of the feild is updated */}
                        <div className="input-container">
                            <i className="fa fa-search icon fa-2x" />
                            <input className="input-field" type="text" placeholder="USERNAME" name="username"/>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}