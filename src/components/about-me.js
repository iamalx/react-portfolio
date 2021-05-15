import '../App.css';
import { useState } from 'react';

const AboutMe = () => {

    const [ userList, setUserList ] = useState([])

    return (
        <div className='error-bar viewport-hg ' >
            <h1 className=''>A little About me:</h1>
            <p>I'm an Avid Software Developer I'm an Avid Software Developer I'm an Avid Software Developer I'm an Avid Software Developer I'm an Avid Software I'm an Avid Software Developer</p>
        </div>
    );
}

export default AboutMe;
