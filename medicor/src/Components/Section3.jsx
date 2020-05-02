import React from 'react';
import { Card, Input, Button, Icon } from 'semantic-ui-react'

export default class Section3 extends React.Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12 contact-header">
                        <h4>Get In Touch</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col"/>
                    <div className="col-lg-4 contact-info">
                        <Card>
                            <Card.Content>
                                <Card.Meta>
                                    <span className='date'>Got Question? Call us 24/7</span>
                                </Card.Meta>
                                <span>(012) 345 679</span>
                                <Card.Description>
                                    <i className="fas fa-envelope fa-2x"/>
                                    <p>demo@demo.com</p>
                                </Card.Description>
                                <br/>
                                <hr/>
                                <br/>
                                <div className="contact-header">
                                    <h4>Newsletter & Update</h4>
                                </div>
                                <p>Sign up for our newsletter to get up-to-date from us</p>
                                <form action="/">
                                    <Input
                                        type="email"
                                        placeholder="email"
                                    />
                                    <Button animated>
                                        <Button.Content visible>Next</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </form>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="col"/>
                </div>
            </div>
        );
    }
}