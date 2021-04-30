import React, { useState, useEffect } from 'react';

const UserList = ({ userList, deleteUser }) => {
    console.log('USERLIST', userList)
    

    return (
        <div className='users-container cl-width error-bor'>
        <ul>
            {userList.map((data,i) => (
                <div className='user-div' key={data.email}>
                    <span className='name error-bor' key={data.email}>{data.firstName + ' ' + data.lastName}
                        <button 
                            key={data.email}
                            className='btn-del'
                            onClick={() => deleteUser(data.email)}>delete
                        </button>
                    </span>
                    <span className='email error-bor' key={data.email}>{`(${data.email})`}</span>
                    <span className='note' key={data.note}>
                        <span className='note-label' key={data.email}>Note:
                        </span>
                        {data.note}
                    </span>
                   
                </div>
                
            ))}
            </ul>
            
        </div>
    );
}

export default UserList;
