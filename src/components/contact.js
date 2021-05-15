import '../App.css';
import { useState } from 'react';

import ContactForm from '../components/form';              

console.log(ContactForm)
const Contact = () => {

    const [ userList, setUserList ] = useState([])

    return (
        <div className='error-bar viewport-hg hr-center'>
            <ContactForm />
        </div>
    );
}

export default Contact;
