import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import UserSchema from '../validators/add-user';
import '../App.css';
import * as yup from 'yup';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './text-field';



 const schema = yup.object({
        firstName: yup.string().required('First name required'),
        lastName: yup.string().required('Last name required'),
        Email: yup.string().email().required(),
        Note: yup.string().required(),
});


const AddUserForm = () => {

    const [val, setVal] = useState('')  

    const saveUser = (data) => {
        console.log(val)
        console.log('1', data)
        setVal(data)
        console.log(val)  
    } 

    return (
        <Formik
            initialValues = {{
                firstName: '', 
                lastName: '',
                email: '',
                notes: '',
            }}
            validationSchema={schema}
            onSubmit={val => saveUser(val)}
        >
            {formik => (
                <div>
                    <Form className='form-container'>
                        <TextField label='First Name' isdirty={formik.dirty.toString()} isfocus='true' name='firstName' type='text'></TextField>
                        <TextField label='Last Name'  isdirty={formik.dirty.toString()} isfocus='false' name='lastName' type='text'></TextField>
                        <TextField label='Email' isdirty={formik.dirty.toString()} isfocus='false' name='Email' type='email'></TextField>
                        <TextField label='Notes' isdirty={formik.dirty.toString()} isfocus='false' name='Note' type='text'></TextField>
                        <button className={formik.isValid & formik.dirty ? 'btn': 'btn-disabled'} 
                            type='submit' 
                            disabled={formik.isValid & formik.dirty ? false: true} >Submit</button> 
                    </Form>
                </div>
                )
            }            
        </Formik>
    );
}

export default AddUserForm