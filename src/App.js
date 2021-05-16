import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import AboutMe from './components/about-me';
import Contact from './components/contact';
import Intro from './components/intro';
import Stack from './components/stack';
import Portfolio from './components/portfolio';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const App = () => {

    const [ userList, setUserList ] = useState([])

    
    return (
        <div>
            <div className='marine-blue viewport-hg  vr-center'>
                <Container>
                    <Row>
                        <Col>
                            <Intro />
                        </Col>
                        <Col>
                            <Stack />
                        </Col>
                    </Row>
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
            <div className='marine-blue viewport-hg  vr-center pt-2'>
                <Container>
                    <Row>
                        <Col>
                            <AboutMe />
                        </Col>
                        <Col> 
                            <Contact />
                        </Col>
                    </Row>
                </Container>
           
            </div>
        </div>
    );
}

export default App;
