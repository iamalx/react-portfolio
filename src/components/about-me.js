import '../App.css';
import { useState } from 'react';

const AboutMe = () => {

    const [ userList, setUserList ] = useState([])

    return (
        <div className='error-bar viewport-hg' >
           <h1 className='mt-5 '>A little about me</h1>
           <p>I'm a Software Developer</p>
        </div>
    );
}

export default AboutMe;
