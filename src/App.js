import './App.css';
import AddUserForm from './components/add-user-form';
import UserList from './components/user-lists';
import React, { useState, useEffect } from 'react';

const App = () => {

    const [ userList, setUserList ] = useState([])

    const updUserList = (data) => {
        // console.log(data)
        if(userList.length >= 1) {
            console.log('user: ', data.email)

            const isIncluded = userList.filter(elem => elem.email === data.email)  
            console.log(isIncluded)
            if (isIncluded.length !== 0) {
                return
            } else {
                let newUserList = [...userList, data]
                console.log(newUserList)
                setUserList(newUserList)
                console.log('user2: ',userList)     
            }
           
        } else {
            console.log('no user: ',userList)     
            setUserList([data])
            console.log('no user:2 ',userList)     
        }
      
    }

    return (
        <div className='App'>
            <h1>Sign Up</h1>
            <AddUserForm updUser={updUserList} />
            <UserList userList={userList}/>
        </div>
    );
}

export default App;
