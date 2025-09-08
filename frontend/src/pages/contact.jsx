import bg from '../images/contact.jpg'
import { Row, Col, Container, Accordion } from 'react-bootstrap';
const Contact = () => {
    return (
        <>
            <div className="image">
                <img src={bg} alt="" className='img-fluid' />
            </div>
            <Container fluid>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144102528!2d2.291906375807896!3d48.8583736007085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1750225621393!5m2!1sen!2sin" className='map'></iframe>
            </Container>
            <Container fluid style={{background: 'linear-gradient( to right, rgb(255, 255, 255), rgb(255, 246, 235))'}}>
                    <Row className='contact_row' style={{ padding: '25px 0px'}}>
                        <Col sm={12} md={12} lg={7} ><div className="contact_text" style={{color:'#4e3c31',fontSize:'18px'}}><p>Inquiry Form</p>
                            <h4 style={{fontSize:'30px'}}>Submit Your Question</h4></div>
                            <Row>
                                <Col className="me-5"><input type="text" placeholder='Your Name' className='contact_input'></input></Col>
                                <Col className="me-3"><input type="text" placeholder='Phone' className='contact_input'></input></Col>
                            </Row>
                            <div style={{padding:'50px 0px'}} className="me-3">
                                <input type="text" placeholder='Email Adress'  className='contact_input' />
                            </div>
                            <div className="me-3">
                                <input type="text" placeholder='Message here...'  className='contact_input' />
                            </div>
                            <button style={{margin:'30px 0px ',color:'white',background:'#4e3c31' ,border:'1px solid #4e3c31',borderRadius:'10px',width:'100px'}}>Submit</button>
                        </Col>
                        <Col sm={12} md={12} lg={5} className='contact_2' style={{ padding: '10px 20px' }}><div className="contact_ad"><div className="contact_box1">
                            <h6 style={{ color: ' #4e3c31', fontSize: '23px' }}>Address</h6>
                            <p style={{ color: ' #4e3c31', fontSize: '17px' }}>No: 58 A, East Madison Street, Baltimore, USA 4508 St. Francis 123, 00968 Roma RM, Italy</p></div></div>
                            <div className="contact_box2" ><h6 style={{ color: ' #4e3c31', fontSize: '23px' }}>phone</h6>
                                <p style={{ color: ' #4e3c31', fontSize: '17px' }}>+0000 1234 56789</p>
                                <p style={{ color: ' #4e3c31', fontSize: '17px' }}>+00 123 456 789</p></div>
                            <div className="contact_box3" ><h6 style={{ color: ' #4e3c31', fontSize: '23px' }}>Email</h6>
                                <p style={{ color: ' #4e3c31', fontSize: '17px' }}>contact@example.com</p>
                                <p style={{ color: ' #4e3c31', fontSize: '17px' }}>support@example.com</p></div>  </Col>
                    </Row>
            </Container>
        </>
    )
}
export default Contact;