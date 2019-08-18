import React from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import SocialMedia from './socialMedia';
import '../../styling/bottomNav.css';

export default class BottomNav extends React.Component {
    render = () => {
        return (
            <Navbar id='bottom'>
                <Navbar.Brand><SocialMedia/></Navbar.Brand>
                <Nav className='ml-auto'>
                    <Button className='licensesButton' href='/licenses'><b>Licenses</b></Button>
                    <Button className='privacyButton' href='/privacy'><b>Privacy</b></Button>
                    <Button className='termsButton' href='/terms'><b>Terms</b></Button>
                </Nav>
            </Navbar>
        );
    }
}