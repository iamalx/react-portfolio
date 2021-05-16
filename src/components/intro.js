import '../App.css';
import { useState } from 'react';

const Intro = () => {

    const [ userList, setUserList ] = useState([])

    
    return (
        <div className='error-bar white-font vr-center' >
           <h1 className='h-font white-font'>Hello World!</h1>
           <p className='main-font'>I'm Alex,</p>
           <p className='main-font'>an avid software developer</p>
        </div>
    );
}

export default Intro;
