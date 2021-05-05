import '../App.css';
import { ErrorMessage, useField } from 'formik';
import { forwardRef } from 'react';

const TextField = forwardRef(({ label, ...props }, ref ) => {

    const [ field, meta ] = useField(props)

    // sets focus to firstName input
    // useEffect(() => {
    //     if(props.isfocus && props.isdirty) {
    //         console.log('props: ', props.isfocus)
    //         textInput.current?.focus()
    //     }
    // })

    return (
        <div className='form-container '>
            <label htmlFor={field.name} >{label}</label>
            <input className={`${meta.touched && meta.error && 'error-bar'}`}
                ref={ref}
                autoComplete='false'
                {...field}{...props}
            />
            <ErrorMessage component='div' className='error-text' name={field.name} />
        </div>
    ) 
}) 

export default TextField;
