import './App.css';
import AddUserForm from './components/add-user-form';
import UserList from './components/user-lists';
import React, { useState } from 'react';

const App = () => {

    const [ userList, setUserList ] = useState([])

    const addUserList = (data) => {
        // checks if state has users 
        if(userList.length >= 1) {
            // checks if email is in lists else save to state
            const isIncluded = userList.filter(elem => elem.email === data.email) 
            if (isIncluded.length !== 0) {
                return
            } else {
                const newUserList = [...userList, data]
                setUserList(newUserList)
            }
        } else {  
            setUserList([data])
        }
    }

    const deleteUser = (email) => {
        const updatedList = userList.filter(elem => elem.email !== email) 
        setUserList(updatedList)
    }
    
    return (
        <div className='App' >
            <AddUserForm updUser={addUserList} />
            <UserList deleteUser={deleteUser} userList={userList} />
        </div>
    );
}

export default App;
