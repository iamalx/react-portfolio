import '../App.css';
import { useState } from 'react';

import ContactForm from '../components/form';              

console.log(ContactForm)
const Contact = () => {

    const [ userList, setUserList ] = useState([])

    const handleSubtmit = (val) => {
        console.log(val)
    }  

    return (
        <div className='error-bar pb-3 hr-center'>
            <ContactForm handleSubtmit={handleSubtmit}/>
        </div>
    );
}

export default Contact;
