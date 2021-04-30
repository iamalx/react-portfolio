import '../App.css';
import { ErrorMessage, useField } from 'formik';
import { useRef , useEffect } from 'react';

const TextField = ({ label, ...props }) => {

    const [ field, meta ] = useField(props)
    const textInput = useRef(null)

    // sets focus to firstName input
    useEffect(() => {
        if(props.isfocus === 'true' && props.isdirty === 'false') {
            textInput.current?.focus()
        }
    })

    return (
        <div className='form-container '>
            <label htmlFor={field.name} >{label}</label>
            <input className={`${meta.touched && meta.error && 'error-bar'}`}
                ref={textInput}
                autoComplete='false'
                {...field}{...props}
            />
            <ErrorMessage component='div' className='error-text' name={field.name} />
        </div>
    ) 
} 
export default TextField;
