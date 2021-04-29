import '../App.css';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
    const [ field, meta ] = useField(props)

    return (
        <div>
            <label htmlFor={field.name} >{label}</label>
            <input className='input'
                autoComplete='false'
                {...field}{...props}
            />
            <ErrorMessage name={field.name} />
        </div>
    ) 
}

export default TextField;
