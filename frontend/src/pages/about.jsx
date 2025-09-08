import bg from '../images/about1.jpg'
import about1 from '../images/about1.webp'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const About = () => {
    const responsive = {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    }

    return (
        <>
            
            <div className="image">
                <img src={bg} alt="Banner" className="img-fluid w-100" />
            </div>

            
            <div className="background_1 py-5 text-center" style={{ backgroundColor: 'rgb(255, 245, 232)', color: '#4e3c31' }}>
                <Container>
                    <h1>A Gentle, Earth-Friendly Cleansing Experience</h1>
                    <p className="fs-5">Explore the world of natural soap in our captivating guide, "The Allure of Natural Soap."</p>
                </Container>
            </div>

            
            <div className="background_2 py-5" style={{ backgroundColor: 'rgba(206, 160, 100, 0.34)' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="p-3">
                            <img src={about1} alt="About Soap" className="img-fluid rounded" />
                        </Col>
                        <Col lg={6} className="p-3 text-dark">
                            <h4 className="fs-3">Handcrafted with certified organic ingredients</h4>
                            <p className="fs-5">Our luxurious range of natural soaps are made using the finest, pure ingredients, including only pure essential oils to create our uplifting, nurturing scents. Our natural soaps and all-natural skincare products gently work in harmony with your skin making them perfect for all skin types and ages.</p>

                            <h4 className="fs-3">Nurturing Your Skin and the Planet</h4>
                            <p className="fs-5">Discover the power of natural ingredients and how they can transform your daily skincare routine. Learn how using natural soap can reduce your ecological footprint.</p>

                            <h4 className="fs-3">A Gentle Approach to Daily Cleansing</h4>
                            <p className="fs-5">Our article, "Nurturing Your Skin with Natural Soap," delves into the soothing and revitalizing properties of natural soap, showcasing the benefits of using chemical-free, plant-based.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="background_1 text-center py-5" style={{ backgroundColor: 'rgb(255, 245, 232)', color: '#4e3c31' }}>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <h1 className="display-4">400+</h1>
                            <p className="fs-5">Sales on First Month</p>
                        </Col>
                        <Col lg={4}>
                            <h1 className="display-4">1 M+</h1>
                            <p className="fs-5">Web Pages Created by Users</p>
                        </Col>
                        <Col lg={4}>
                            <h1 className="display-4">500 K+</h1>
                            <p className="fs-5">Customers Served Around The World</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="background_2 text-center py-5" style={{ backgroundColor: 'rgba(255, 211, 154, 0.34)' }}>
                <Container>
                    <div className="mb-5" style={{ color: '#4e3c31' }}>
                        <p className="fs-6">Behind The Brand</p>
                        <h1>Meet Our Team</h1>
                        <p className="fs-5">We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We are small, but we are a mighty group of talented individuals.</p>
                    </div>

                    <OwlCarousel className="owl-theme" loop margin={20} autoplay autoplayHoverPause dots={false} autoplayTimeout={2500} responsive={responsive}>

                        <div className="item p-3">
                            <img src={team1} alt="Margit Tinatin - CEO" className="img-fluid rounded" />
                            <h6 className="mt-3 fs-4" style={{ color: '#4e3c31' }}>Margit Tinatin</h6>
                            <p className="text-muted">Chief Executive Officer</p>
                        </div>
                        <div className="item p-3">
                            <img src={team2} alt="Jasmin Kleio - Chemist" className="img-fluid rounded" />
                            <h6 className="mt-3 fs-4" style={{ color: '#4e3c31' }}>Jasmin Kleio</h6>
                            <p className="text-muted">Formulation Chemist</p>
                        </div>
                        <div className="item p-3">
                            <img src={team3} alt="Amelie Isabell - Supervisor" className="img-fluid rounded" />
                            <h6 className="mt-3 fs-4" style={{ color: '#4e3c31' }}>Amelie Isabell</h6>
                            <p className="text-muted">Manufacturing Supervisor</p>
                        </div>
                        <div className="item p-3">
                            <img src={team4} alt="Lina Nana - Scientist" className="img-fluid rounded" />
                            <h6 className="mt-3 fs-4" style={{ color: '#4e3c31' }}>Lina Nana</h6>
                            <p className="text-muted">R&D Scientist</p>
                        </div>
                    </OwlCarousel>
                </Container>
            </div>

            <div className="background_1 text-center py-5" style={{ backgroundColor: 'rgb(255, 250, 244)', color: '#4e3c31' }}>
                <Container>
                    <Row>
                        <Col lg={4} className="p-3">
                            <h6 className="fs-2">47,000+ Happy Customer</h6>
                            <p className="fs-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col lg={4} className="p-3">
                            <h6 className="fs-2">20 Awards Won</h6>
                            <p className="fs-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col lg={4} className="p-3">
                            <h6 className="fs-2">24 Years of Experiences</h6>
                            <p className="fs-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About
