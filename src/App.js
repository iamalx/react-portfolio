import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import AboutMe from './components/about-me';
import Contact from './components/contact';
import Intro from './components/intro';
import Stack from './components/stack';
import Portfolio from './components/portfolio';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const App = () => {

    const [ isMobile, setIsMobile ] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            console.log('w', window.innerWidth)
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
            <div className=''>
                <Container>
                    <Row>
                        <Col>
                            <Portfolio />   
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`marine-blue ${!isMobile && 'viewport-hg'}  vr-center pt-2 `}>
                <Container>
                    {isMobile ?
                                <Row>      
                                    <Col sm={12}>
                                        <AboutMe />
                                    </Col>
                                    <Col sm={12}> 
                                        <Contact />
                                    </Col>
                                </Row>
                            :
                                <Row>  
                                    <Col >
                                        <AboutMe />
                                    </Col>
                                    <Col > 
                                        <Contact />
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
