import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ErrorMsg from './ErrorMsg';
import { useFormikContext } from 'formik';
import colors from '../../config/colors';

function AppFormPicker({ name, items, placeholder, width }) {
    const { errors, touched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <View style={[styles.container, {width}]}>
                <Picker
                    selectedValue={values[name]}
                    onValueChange={(itemValue, itemIndex) => {
                        setFieldValue(name, itemValue);
                    }}
                    style={[styles.picker,{width}]}
                >
                    <Picker.Item label={placeholder} value="" />
                    {
                        items.map((item) => <Picker.Item key={item.value} label={item.label} value={item} />)
                    }
                </Picker>
            </View>
            <ErrorMsg error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderRadius: 25,
        overflow: 'hidden',
    },
    picker: {
        backgroundColor: colors.light,
    }
})

export default AppFormPicker;