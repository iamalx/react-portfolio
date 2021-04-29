import React, { useState, useEffect } from 'react';

const UserList = ({ userList }) => {
    console.log('USERLIST', userList)
    

    return (
        <div className='container'>

        <ul>
            {userList.map((data,i) => (
            <li key={ data.email}> {data.email}</li>
                // <React.Fragment>
                //     {console.log(data)}
                //     <li key={ Date.now()}> {data.email}</li>
                //     <button key={Date.now()} className='btn-del' >delete</button>
                //     </React.Fragment>
                
            ))}
            </ul>
            
        </div>
    );
}

export default UserList;
