import '../App.css';
import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const projects = [
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    {
        title: 'My Portfolio ',
        text: 'Web app build with React',
        link: 'github.com/iamalx',
    },
    
]

const Portfolio = () => {

    const [ userList, setUserList ] = useState([])


    return (
        <div className='error-bar pb-5' >
            <h2 className='sub-font mb-4 pt-1'>Portfolio</h2>
            <Container>
                <Row>
                   
                        {projects.map(elem => (
                            <Col sm={12} md={4} className='mb-5'>
                                <Card key={elem.title} style={{ width: '100%' }} className='card-effects'>
                                    <Card.Body>
                                        <Card.Title>{elem.title}</Card.Title>
                                            <Card.Text>
                                            {elem.text}
                                            </Card.Text>
                                        <Card.Link href="github.com/iamalx">{elem.link}</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                           ))}                  
                 
                </Row>
            </Container>

            
        </div>
    );
}

export default Portfolio;
