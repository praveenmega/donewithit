import React from 'react';
import AppTextInput from '../AppTextInput/AppTextInput';
import ErrorMsg from './ErrorMsg';
import { useFormikContext } from 'formik';

function AppFormField({name, width, ...otherProps}) {
    const {handleChange, setFieldTouched, errors, touched, setFieldValue, values} = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps} />
            <ErrorMsg error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;