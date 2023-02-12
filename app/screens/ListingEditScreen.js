import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from '../components/Screen/Screen';
import * as yup from 'yup';
import {AppForm, AppFormField, SubmitBtn} from '../components/Forms';
import AppFormPicker from '../components/Forms/AppFormPicker';
import AppFormImagePicker from '../components/Forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import ListingApi from '../api/listings';
import useApi from '../hooks/useApi';
import UploadScreen from './UploadScreen';

function ListingEditScreen(props) {
  const location = useLocation();
  const postListing = useApi(ListingApi.addListings);
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  let schema = yup.object().shape({
    images: yup.array().min(1).label('Image'),
    title: yup.string().required().label('Title'),
    price: yup.number().required().min(1).max(10000).label('Price'),
    category: yup.object().required().nullable().label('Category'),
    Description: yup.string().label('Description'),
  });

  const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3},
    {label: 'Cars', value: 4},
    {label: 'Games', value: 5},
    {label: 'Sports', value: 6},
    {label: 'Movies & Music', value: 7},
    {label: 'Books', value: 8},
    {label: 'Other', value: 9},
  ];

  const submitHandler = async (data,{ resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await ListingApi.addListings({...data, location}, setProgress);
    if (!result.ok) {
      setUploadVisible(false);
      return alert('could not save the listing');
    }
    alert('success');
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          images: [],
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={submitHandler}
        validationSchema={schema}>
        <AppFormImagePicker name="images" />
        <AppFormField
          name="title"
          autoCapitalize="sentences"
          autoCorrect={false}
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          width={200}
        />
        <AppFormField
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitBtn title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
