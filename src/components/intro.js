import '../App.css';
import { useState } from 'react';

const Intro = () => {

    const [ userList, setUserList ] = useState([])

    
    return (
        <div className='error-bar viewport-hg' >
           <h1 className='mt-5 '>Hello World!</h1>
           <h2>I'm a Software Developer</h2>
        </div>
    );
}

export default Intro;
