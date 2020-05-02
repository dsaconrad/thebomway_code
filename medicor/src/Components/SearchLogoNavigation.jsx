import React from "react";
import { Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Dropdown, Menu, Button } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

export default class SearchLogoNavigation extends React.Component {

    openCategories = (e) => {
        e.preventDefault();
        console.log("log")
    };
    render() {
        return (
            <>
                <div className="col-sm-12 search-logo-navigation">
                    <div className="row">
                        <div className="col-sm-3 image">
                            <img src="https://demo1.leotheme.com/bos_medicor_demo/img/bos-medicor-logo-1568714014.jpg" alt="medicor"/>
                        </div>
                        <div className="col-sm-6 search">
                            <div className="row search-row">
                                <div className="col-sm-8">
                                    <form action="/">
                                        <input
                                            className="input"
                                            placeholder="search medicine"
                                            type="text"
                                        />
                                    </form>
                                </div>
                                <div className="col-sm-3">
                                    <Navbar>
                                        <Nav>
                                            <UncontrolledDropdown setActiveFromChild>
                                                <DropdownToggle tag="a" caret>
                                                    <strong>Categories</strong>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="/blah" active>Link1</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Nav>
                                    </Navbar>
                                </div>
                                <div className="col-sm-1 icon-container">
                                    <Button icon="search"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 medicine-image">
                            <img src="https://demo1.leotheme.com/bos_medicor_demo/themes/bos_medicor/assets/img/modules/appagebuilder/images/1-h1.png" alt="medicines"/>
                        </div>
                    </div>
                </div>
                <hr style={{"width": "100%", "margin": "0"}}/>
                <div className="col-sm-12 navigator-2">
                    <div className="row navigator-2-row">
                        <Dropdown
                            placeholder="ALL CATEGORIES"
                            className="col-sm-3 dropdown-toggle-categories"
                            clearable
                            options={options}
                            selection />
                        <div className="col-lg-6 multiple-navigations">
                            <div>HOME</div>
                            <div>
                                <Menu compact>
                                    <Dropdown
                                        text='CATEGORIES'
                                        options={options}
                                        simple
                                        item
                                    />
                                </Menu>
                            </div>
                            <div>
                                <Menu compact>
                                    <Dropdown
                                        text='PAGES'
                                        options={options}
                                        simple
                                        item
                                    />
                                </Menu>
                            </div>
                            <div>ON SALE</div>
                            <div>BLOG</div>
                        </div>
                        <div className="col-sm-3 cart-status">
                            <Button icon="cart" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}