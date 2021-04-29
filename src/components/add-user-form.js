import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import UserSchema from '../validators/add-user';
import * as yup from 'yup';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './text-field';



 const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required().email(),
        notes: yup.string().required(),
});


const AddUserForm = () => {

    const [val, setVal] = useState('')    

    const saveUser = (data) => {
        console.log(val)
        console.log('1', data)
        setVal(data)
        console.log(val)
        
    } 
    let  Submit= 'not'

    const onChange = (val) => {
         console.log(val)
        if(val.isValid && val.dirty) {
            Submit='submit'
            console.log(val.isValid)
        } else Submit='not'
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
                   {onChange(formik)}
                    <Form>
                        <TextField label='First Name' name='firstName' type='text'></TextField>
                        <TextField label='Last Name' name='lastName' type='text'></TextField>
                        <TextField label='Email' name='email' type='email'></TextField>
                        <TextField label='Notes' name='notes' type='textarea'></TextField>
                        <button type='submit'>{Submit}</button> 
                    </Form>
                </div>
                )
            
            
            }            
        </Formik>
    );
}

export default AddUserForm