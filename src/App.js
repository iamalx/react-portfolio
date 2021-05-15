import './App.css';
import AddUserForm from './components/form';
import React, { useState } from 'react';

const App = () => {

    const [ userList, setUserList ] = useState([])

    
    return (
        <div className='App' >
            <AddUserForm />
           
        </div>
    );
}

export default App;
