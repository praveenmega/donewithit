import React, { useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';
import { useFormikContext } from 'formik';
import ErrorMsg from './ErrorMsg';

function AppFormImagePicker({name}) {
    const { errors, touched, setFieldValue, values } = useFormikContext();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
                allowsMultipleSelection: true,
            });

            if (!result.canceled) {
                const imgAssets = result.assets.map(asset => asset);
                const allAssets = [...values[name], ...imgAssets];
                const filteredAssets = allAssets.filter((asset, index, self) => index === self.findIndex(item => (item.assetId === asset.assetId)));

                setFieldValue(name,[...filteredAssets]);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const deleteImage = (item) => {
        const filteredAssets = values[name].filter(asset => asset.assetId !== item.assetId);

        setFieldValue(name,[...filteredAssets]);
    }

    return (
        <>
            <View style={styles.container}>
                {values[name].length > 0 && <>
                    {values[name].map((img, i) => <TouchableOpacity key={i} onPress={() => deleteImage(img)}>
                        <Image source={{ uri: img.uri }} style={styles.img} />
                    </TouchableOpacity>)}
                </>
                }
                <TouchableOpacity style={styles.btnContainer} onPress={pickImage}>
                    <MCIcon name='camera' color={colors.medium} size={40} />
                </TouchableOpacity>
            </View>
            <ErrorMsg error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: colors.light,
        borderRadius: 15,
    }
})

export default AppFormImagePicker;