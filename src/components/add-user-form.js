import '../App.css';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from './text-field';

const schema = yup.object({
        firstName: yup.string().required('First name required'),
        lastName: yup.string().required('Last name required'),
        email: yup.string().email().required('Email required'), 
        note: yup.string().required('Note required'),
});


const AddUserForm = ({ updUser }) => {

    const saveUser = (data) => {
        updUser(data)
    } 

    // parent component of input 
    return (
        <Formik
            initialValues = {{
                firstName: '', 
                lastName: '',
                email: '',
                note: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                saveUser(values)
                resetForm()
            }}
        >
            {formik => (
                <div className='cl-width'>
                    <h1>Sign Up</h1>

                    <Form className='form-container'>
                        <TextField label='First Name'
                            isdirty={formik.dirty.toString()} 
                            isfocus='true'
                            name='firstName' 
                            type='text'
                        ></TextField>
                        <TextField label='Last Name' 
                            isdirty={formik.dirty.toString()}
                            isfocus='false'
                            name='lastName'
                            type='text'
                        ></TextField>
                        <TextField label='Email'
                            isdirty={formik.dirty.toString()}
                            isfocus='false'
                            name='email'
                            type='email'
                        ></TextField>
                        <TextField 
                            label='Note'
                            isdirty={formik.dirty.toString()}
                            isfocus='false'
                            name='note'
                            type='text'
                        ></TextField>
                        
                        <button className={formik.isValid & formik.dirty ? 'btn': 'btn-disabled'} 
                            type='submit' 
                            disabled={formik.isValid & formik.dirty ? false: true}>
                        Submit</button> 

                    </Form>
                </div>
                )
            }            
        </Formik>
    );
}

export default AddUserForm