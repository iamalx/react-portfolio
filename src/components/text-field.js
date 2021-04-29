import '../App.css';
import { ErrorMessage, useField } from 'formik';
import { useRef , useEffect } from 'react';
import '../App.css';

const TextField = ({ label, ...props }) => {
    const [ field, meta ] = useField(props)
    
    const textInput = useRef(null)

    useEffect(() => {
        if(props.isfocus === 'true' && props.isdirty === 'false') {
            textInput.current?.focus()
        }
    })

    return (
        <div className='form-container'>
            <label htmlFor={field.name} >{label}</label>
            <input className={`${meta.touched && meta.error && 'error-msg'}`}
                ref={textInput}
                autoComplete='false'
                {...field}{...props}
            />
            <ErrorMessage component='div' className='error-text' name={field.name} />
        </div>
    ) 
} 
export default TextField;
