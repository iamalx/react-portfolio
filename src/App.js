import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';

import AboutMe from './components/about-me';
import Contact from './components/contact';
import Intro from './components/intro';
import Stack from './components/stack';
import Portfolio from './components/portfolio';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';




const App = () => {

    const [ isMobile, setIsMobile ] = useState(false)

    const portfolioRef = useRef(null)
    const aboutMeRef = useRef(null)
    const contactRef = useRef(null)

    const handleScroll = (ref) => {
        ref.current.scrollIntoView() 
    }
    
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect( _ => {
        handleResize()
        window.addEventListener("resize", handleResize)
    })
    
    return (
        <div>
            <div className='marine-blue'>
            <Container>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link 
                            className=' lightgrey-font' 
                            onClick={() => handleScroll(portfolioRef)}
                            >Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            className=' lightgrey-font'
                            onClick={() => handleScroll(aboutMeRef)}
                            >About Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                            className=' lightgrey-font'
                            onClick={() => handleScroll(contactRef)}
                            >Contact
                        </Nav.Link>
                    </Nav.Item>
                
                    </Nav>
            </Container>
            </div>
            <div className='marine-blue viewport-hg  vr-center'>
            <Container>
                        {isMobile ?
                            <Row>      
                                <Col sm={12}>
                                    <Intro />
                                </Col>
                                <Col sm={12}> 
                                    <Stack />
                                </Col>
                            </Row>
                        :
                            <Row>  
                                <Col >
                                    <Intro />
                                </Col>
                                <Col > 
                                    <Stack />
                                </Col>
                            </Row>

                        }
                </Container>
            </div>
            <div className='' ref={portfolioRef}>
                <Container>
                    <Row>
                        <Col>
                            <Portfolio  />   
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`marine-blue ${!isMobile && 'viewport-hg'}  vr-center pt-2 `}>
                <Container>
                    {isMobile ?
                                <Row>      
                                    <Col sm={12}>
                                        <div ref={aboutMeRef} >
                                            <AboutMe />
                                        </div>
                                    </Col>
                                    <Col sm={12}> 
                                        <div ref={contactRef} >
                                            <Contact />
                                        </div>                                        
                                    </Col>
                                </Row>
                            :
                                <Row>  
                                    <Col > 
                                        <div ref={aboutMeRef} >
                                            <AboutMe />
                                        </div>
                                    </Col>
                                    <Col > 
                                        <div ref={contactRef} >
                                            <Contact />
                                        </div>
                                    </Col>
                                </Row>

                    }
                </Container> 
                
            </div>
            <Container>  
                <div>
                    <small> UI built with React & Bootstrap. Deployed with Firebase</small>
                </div> 
                </Container>    
        </div>
    );
}

export default App;
