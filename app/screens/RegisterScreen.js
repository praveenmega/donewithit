import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Screen from '../components/Screen/Screen';
import * as yup from 'yup';
import {AppForm, AppFormField, SubmitBtn, ErrorMsg} from '../components/Forms';
import userApi from '../api/user';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import LoadingSpin from '../components/LoadingSpin/LoadingSpin';

function RegisterScreen(props) {
  const registerApi = useApi(userApi.registerUser);
  const loginApi = useApi(authApi.login);
  const [regisFailed, setRegisFailed] = useState(false);
  const [regisErrMsg, setRegisErrMsg] = useState('');
  const {login} = useAuth();

  let schema = yup.object().shape({
    name: yup.string().required().label('Name'),
    email: yup.string().required().email().label('Email'),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
        'Password must contain atleast one digit,uppercase,lowercase and a special character',
      )
      .label('Password'),
  });

  const submitHandler = async ({name, email, password}) => {
    await registerApi.request(name, email, password);
    if (registerApi.error) {
      setRegisFailed(true);
      setRegisErrMsg(registerApi.data?.error);
      return;
    }

    setRegisFailed(false);
    await loginApi.request(email, password);
    var token = loginApi.data;
    login(token);
  };

  return (
    <>
      <LoadingSpin visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={values => submitHandler(values)}
          validationSchema={schema}>
          <ErrorMsg error={regisErrMsg} visible={regisFailed} />
          <AppFormField
            name="name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            icon="account"
            placeholder="Name"
          />
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            icon="email"
            placeholder="Email"
          />
          <AppFormField
            name="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            icon="lock"
            placeholder="Password"
          />
          <SubmitBtn title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
