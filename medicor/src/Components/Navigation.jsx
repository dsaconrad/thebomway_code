import React from "react";
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="row">
                        <div className="col-lg-2 language-dropdown dropdown">
                            <Navbar expand="md">
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown setActiveFromChild>
                                        <DropdownToggle tag="a" caret>
                                            Language:
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag="a" href="/blah" active>Link1</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Navbar>
                        </div>
                        <div className="col-lg-6 left currency-dropdown dropdown">
                            <Navbar expand="md">
                                <Nav navbar>
                                    <UncontrolledDropdown setActiveFromChild>
                                        <DropdownToggle tag="a" caret>
                                            Currency:
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag="a" href="/blah" active>Link1</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Navbar>
                        </div>
                        <div className="col-lg-2 wishlist-container">Wishlist (0)</div>
                        <div className="col-lg-2">
                            <Navbar expand="md">
                                <Nav navbar>
                                    <UncontrolledDropdown setActiveFromChild>
                                        <DropdownToggle tag="a" caret>
                                            My Account
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag="a" href="/blah" active>Link1</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Navbar>
                        </div>
                </div>
            </div>
        );
    }
}