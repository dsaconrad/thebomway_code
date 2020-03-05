import React from "react";
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class UserNavigations extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 user-navigation">
                    <i className="fa fa-user-circle icon user-icon fa-2x" />
                    <Navbar expand="md">
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="nav-link" caret>
                                    Seller Name
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah" active>Link1</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}