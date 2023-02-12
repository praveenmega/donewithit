import React from 'react';
import AppButton from '../AppButton/AppButton';
import { useFormikContext } from 'formik';

function SubmitBtn({title}) {
    const {handleSubmit} = useFormikContext();

    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
}

export default SubmitBtn;