import * as yup from 'yup';

const schema = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().required(),
      });

    return schema
}

export default schema;