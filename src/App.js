import './App.css';
import AddUserForm from './components/add-user-form';
import UserList from './components/user-lists';


const App = () => {

    return (
        <div className='App'>
            <h1>Sign Up</h1>
            <AddUserForm />
            <UserList />
        </div>
    );
}

export default App;
