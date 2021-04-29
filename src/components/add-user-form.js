import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import UserSchema from '../validators/add-user';
import '../App.css';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import TextField from './text-field';



 const schema = yup.object({
        firstName: yup.string().required('First name required'),
        lastName: yup.string().required('Last name required'),
        email: yup.string().email().required('Email required'), 
        note: yup.string().required('Note required'),
});


const AddUserForm = ({ updUser }) => {
    // console.log(updUserList)
    // const [val, setVal] = useState({})  

    const saveUser = async (data) => {
        // setVal(data)
        // setVal((state) => {
            console.log('USERFORM')
            updUser(data)
            // return state
        //   });
    } 

    return (
        <Formik
            initialValues = {{
                firstName: '', 
                lastName: '',
                email: '',
                note: '',
            }}
            validationSchema={schema}
            onSubmit={val => saveUser(val)}
        >
            {formik => (
                <div>
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