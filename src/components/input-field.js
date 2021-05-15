import '../App.css';
import { ErrorMessage, useField } from 'formik';
import { forwardRef } from 'react';

const TextField = forwardRef(({ label, ...props }, ref ) => {

    const [ field, meta ] = useField(props)

    if(props.name !== 'Body') {
        return (
            <div className='form-container' >
                <label htmlFor={field.name} >{label}</label>
                <input className={`${meta.touched && meta.error && 'error-bar'}`}
                    autoComplete='false'
                    {...field}{...props}
                />
                <ErrorMessage component='div' className='error-text' name={field.name} />
            </div>
        ) 
    } else {
        return (
            <div className='form-container' >
                <label htmlFor={field.name} >{label}</label>
                <textarea className={`${meta.touched && meta.error && 'error-bar'}`}
                    autoComplete='false'
                    {...field}{...props}
                ></textarea>
                <ErrorMessage component='div' className='error-text' name={field.name} />
            </div>
        ) 
    }

}) 

export default TextField;
