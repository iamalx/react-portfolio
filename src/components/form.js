import '../App.css';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from './input-field';
import { useEffect, useRef } from 'react';

const schema = yup.object({
    Name: yup.string().min(2).required(),
    Email: yup.string().email().required(), 
    Subject: yup.string().min(3).required(),
    Body: yup.string().min(3).required(),
});


const ContactForm = ({ updUser }) => {

    const inputRef = useRef(null)

    const saveUser = (data) => {
        updUser(data)
    } 

    useEffect(() => {
    }, [])

    // parent component of input 
    return (
        <Formik
            initialValues = {{
                Name: '', 
                Email: '',
                Subject: '',
                Body: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                saveUser(values)
                resetForm()
            }}
        >
            {formik => (
                <div className='cl-width white-font'>
                    <h2 className='sub-font mb-4 pt-2'>Contact Me</h2>
                    <Form className='form-container'>
                        <TextField label='First Name'
                            isdirty={formik.dirty.toString()} 
                            name='Name' 
                            type='text'
                            ref={inputRef}
                        ></TextField>
                        <TextField label='Email'
                            isdirty={formik.dirty.toString()}
                            name='Email'
                            type='email'
                        ></TextField>
                        <TextField 
                            label='Subject'
                            isdirty={formik.dirty.toString()}
                            name='Subject'
                            type='text'
                        ></TextField>
                        <TextField label='Body' 
                            isdirty={formik.dirty.toString()}
                            name='Body'
                            type='text'
                        ></TextField>
                        
                        <button className={formik.isValid & formik.dirty ? 'btn': 'btn-disabled'} 
                            type='submit' 
                            disabled={formik.isValid & formik.dirty ? false: true}>
                            Submit
                        </button> 

                    </Form>
                </div>
                )
            }            
        </Formik>
    );
}

export default ContactForm;