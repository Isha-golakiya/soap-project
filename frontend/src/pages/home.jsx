import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import hs1 from '../images/hs1.jpg'
import hs2 from '../images/hs2.jpg'
import hs3 from '../images/hs3.jpg'
import hs4 from '../images/hs4.jpg'
import home1 from '../images/home1.jpg'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <OwlCarousel className="owl-theme" loop margin={10} nav={false} dots={false} items={1} autoplay={true} autoplayTimeout={1000} autoplayHoverPause>
                <div className="item">
                    <div className="image1">
                        <img src={slider1} alt="Slider" className="img-fluid" />
                    </div>
                </div>
                <div className="item">
                    <div className="image1">
                        <img src={slider2} alt="Slider" className="img-fluid" />
                    </div>
                </div>
                <div className="item">
                    <div className="image1">
                        <img src={slider3} alt="Slider" className="img-fluid" />
                    </div>
                </div>
            </OwlCarousel>
            <div className="home_1" style={{ textAlign: 'center', color: ' #4e3c31', background: 'linear-gradient( rgb(255, 255, 255), rgb(247, 233, 215))' }}>
                <Container>
                    <div className="text2a" style={{ color: ' #4e3c31', padding: '30px 0px' }}><h1 style={{ fontSize: '40px' }}>Signature Formula Soap Manufacturer!</h1><p style={{ fontSize: '20px' }}>Natoque congue ultricies sapien aenean pellentesque maecenas eros proin.
                        Senectus posuere fames nisi tempor auctor nibh efficitur nulla. Gravida eros
                        commodo vitae aliquet natoque egestas finibus himenaeos inceptos quis libero
                        at congue facilisis.</p></div>
                    <div className="home_shop">
                        <Row>
                            <Col sm={12} md={6} lg={3} style={{ padding: ' 0px 30px 10px 30px' }} className='image_col'><img src={hs1} alt="" /><br /><p style={{fontSize:'20px'}}>Organic Soaps</p></Col>
                            <Col sm={12} md={6} lg={3} style={{ padding: ' 0px 30px 10px 30px' }} className='image_col'><img src={hs2} alt="" /><br /><p style={{fontSize:'20px'}}>Herbal Soaps</p></Col>
                            <Col sm={12} md={6} lg={3} style={{ padding: ' 0px 30px 10px 30px' }} className='image_col'><img src={hs3} alt="" /><br /><p style={{fontSize:'20px'}}>Plant-Based Soaps</p></Col>
                            <Col sm={12} md={6} lg={3} style={{ padding: ' 0px 30px 10px 30px' }} className='image_col'><img src={hs4} alt="" /><br /><p style={{fontSize:'20px'}}>Handmade Soaps</p></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="home_info" style={{ background: 'linear-gradient(rgb(247, 233, 215),rgb(252, 240, 223))' }}>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={6}><div className="home_pic1" style={{ padding: '10px' }}><img src={home1} alt="" /></div></Col>
                        <Col sm={12} md={12} lg={6}><div className="text2a" style={{ padding: '10px', color: 'rgb(65, 50, 41)' }}><h4 style={{ fontSize: '29px' }}>Handcrafted with certified organic ingredients</h4><p style={{ fontSize: '20px' }}>Our luxurious range of natural soaps are made using the finest, pure ingredients, including only pure essential oils to create our uplifting, nurturing scents. Our natural soaps and all-natural skincare products gently work in harmony with your skin making them perfect for all skin types and ages.</p>
                            <h4 style={{ fontSize: '29px' }}>Nurturing Your Skin and the Planet</h4>
                            <p style={{ fontSize: '20px' }}>Discover the power of natural ingredients and how they can transform your daily skincare routine. Learn how using natural soap can reduce your ecological footprint.</p><h4 style={{ fontSize: '29px' }}>A Gentle Approach to Daily Cleansing</h4>
                            <p style={{ fontSize: '20px' }}>Our article, "Nurturing Your Skin with Natural Soap," delves into the soothing and revitalizing properties of natural soap, showcasing the benefits of using chemical-free, plant-based.</p></div></Col>
                    </Row>
                </Container>
            </div>
            <div className="home_1" style={{ textAlign: 'center', color: ' #4e3c31', background: 'linear-gradient(rgb(252, 240, 223) , rgb(255, 255, 255))' }}>
                <Container>
                    <div className="text2a" style={{ color: ' #4e3c31', padding: '30px 0px' }}><h2 style={{ fontSize: '35px' }}>Luxurious skincare </h2><p style={{ fontSize: '20px' }}>Natural products
                        Dedicated To Give Radiant and Youthful Glow
                        Nullam praesent potenti senectus proin quisque elit. Cursus dictumst venenatis phasellus fringilla turpis varius.</p></div>
                    <div className="home_shop">
                        <Row>
                            <Col sm={12} md={12} lg={3}><h1 style={{ fontSize: '50px' }}>128+</h1><p style={{ fontSize: '18px' }}>Global Stores</p></Col>
                            <Col sm={12} md={12} lg={3}><h1 style={{ fontSize: '50px' }}>99K</h1><p style={{ fontSize: '18px' }}>Happy Customers</p></Col>
                            <Col sm={12} md={12} lg={3}><h1 style={{ fontSize: '50px' }}>190+</h1><p style={{ fontSize: '18px' }}>Professional Team</p></Col>
                            <Col sm={12} md={12} lg={3}><h1 style={{ fontSize: '50px' }}>84K</h1><p style={{ fontSize: '18px' }}>Corporate Members</p></Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </>
    )
}
export default Home;

