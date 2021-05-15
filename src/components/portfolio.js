import '../App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

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
    }
]

const Portfolio = () => {

    const [ userList, setUserList ] = useState([])


    return (
        <div className='error-bar viewport-hg' >
            {console.log(projects)}
            {projects.map(elem => (
                    <Card key={elem.title} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{elem.title}</Card.Title>
                                <Card.Text>
                                {elem.text}
                                </Card.Text>
                            <Card.Link href="#">{elem.link}</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
            
        </div>
    );
}

export default Portfolio;
