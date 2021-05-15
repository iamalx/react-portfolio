import '../App.css';
import { useState } from 'react';

const Intro = () => {

    const [ userList, setUserList ] = useState([])

    
    return (
        <div className='error-bar viewport-hg vr-center ' >
           <h1 className=''>Hello World!</h1>
           <p>I'm an Avid Software Developer</p>
        </div>
    );
}

export default Intro;
