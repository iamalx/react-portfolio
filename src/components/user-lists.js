const UserList = ({ userList, deleteUser }) => {    

    // displays the lists of users
    return (
        <div className='users-container cl-width'>
        <ul>
            {userList.map((data) => (
                <div className='user-div' key={data.email}>
                    <span className='name error-bor' key={data.email}>{data.firstName + ' ' + data.lastName}
                        <button 
                            key={data.email}
                            className='btn-del'
                            onClick={() => deleteUser(data.email)}
                            >delete
                        </button>
                    </span>
                    <span className='email' key={data.email}>{`(${data.email})`}</span>
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
