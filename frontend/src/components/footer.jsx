import logo from '../images/logo.jpg'
import { Row, Col, Container, Accordion } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = async () => {
        if (!email) {
            setStatus('Please enter an email');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/send-email', { email });
            setStatus('Subscribed successfully!');
            setEmail('');
        } catch (err) {
            console.error(err);
            setStatus('Failed to subscribe.');
        }
    };
    return (
        <>
            <div className="background">
                <div className="logo1 mt-5"><img src={logo} alt="" width={120} /></div>
                <div className="footer_text">
                    <p style={{ fontFamily: 'Gilda Display, serif', color: ' #4e3c31', padding: '20px 0px', fontSize: '30px' }}>
                        Be The First To Know
                    </p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"
                        style={{ border: ' #4e3c31 1px solid', padding: '10px', width: '500px', backgroundColor: 'transparent', color: ' #4e3c31', }} />
                    <button className='footer_button'
                        onClick={handleSubscribe}
                        style={{ marginLeft: '10px', padding: '10px 20px', border: ' #4e3c31 1px solid', background: '#4e3c31', color: 'white', }}>
                        Subscribe
                    </button>
                    {status && (
                        <p style={{ marginTop: '10px', color: '#4e3c31', fontWeight: 'bold' }}>{status}</p>
                    )}
                </div>
                <div className="part">
                    <Container>
                        <Row style={{ padding: '30px 0px' }}>
                            <Col xs={12} className="d-md-none">
                                <Accordion>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header style={{ color: ' #4e3c31'}}><p style={{fontSize:'18px'}}>Information</p></Accordion.Header>
                                        <Accordion.Body>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Company Overview</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Investors</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Store Directory</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Returns & Refunds</a></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col md={6} lg={3} className="column d-none d-md-block"><div className="text_1"><p style={{ fontSize: '25px', color: ' #4e3c31' }} >Information</p></div>
                                <ul style={{ listStyle: 'none' }}><li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Company Overview</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Investors</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Store Directory</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Returns & Refunds</p></a></li></ul>
                            </Col>
                            <Col xs={12} className="d-md-none">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><p style={{fontSize:'18px'}}>Orders</p></Accordion.Header>
                                        <Accordion.Body>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Delivery Information</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Your Account</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Track Order</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Cancellation</a></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col md={6} lg={3} className="column d-none d-md-block"><div className="text_1"><p style={{ fontSize: '25px', color: ' #4e3c31' }}>Orders</p></div>
                                <ul style={{ listStyle: 'none' }}><li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Delivery Information</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Your Account</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Track Order</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Cancellation</p></a></li>
                                </ul>
                            </Col>
                            <Col xs={12} className="d-md-none">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><p style={{fontSize:'18px'}}>Quick Links</p></Accordion.Header>
                                        <Accordion.Body>
                                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Shipping Policy</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Terms Of Use</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Terms of Service</a></li>
                                                <li><a href="#" style={{ textDecoration: 'none', color: '#4e3c31' }}>Privacy Policy</a></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col md={6} lg={3} className="column d-none d-md-block"><div className="text_1"><p style={{ fontSize: '25px', color: ' #4e3c31' }}>Quick Links</p></div>
                                <ul style={{ listStyle: 'none' }}><li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Shipping Policy</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Terms Of Use</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Terms of Service</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>Privacy Policy</p></a></li></ul>
                            </Col>
                            <Col md={6} lg={3} className="column"><p style={{ fontSize: '25px', color: ' #4e3c31' }}>Reach Out To Us</p>
                                <ul style={{ listStyle: 'none' }}><li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>+00 1234-567-89</p></a></li>
                                    <li><a href="#" style={{ textDecoration: 'none' }}><p style={{ fontSize: '18px', color: ' #4e3c31' }}>contact@example.com</p></a></li></ul>
                                <p style={{ fontSize: '22px', color: ' #4e3c31' }}>Social Links</p></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Footer;