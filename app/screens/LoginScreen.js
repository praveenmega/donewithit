import React, {useState,useContext} from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen/Screen';
import * as yup from 'yup';
import { AppForm,AppFormField,SubmitBtn,ErrorMsg } from '../components/Forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

function LoginScreen(props) {
    const {login} = useAuth();
    const [loginFailed,setLoginfailed] = useState(false);
    const [loginErrMsg,setLoginErrMsg] = useState('');

    let schema = yup.object().shape({
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().min(8)
            .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
                'Password must contain atleast one digit,uppercase,lowercase and a special character')
            .label('Password'),
    });

    const handleSubmit = async ({email,password}) => {
        console.log(email);
        const result = await authApi.login(email, password);

        console.log(result);

        if(!result.ok) {
            setLoginfailed(true);
            setLoginErrMsg(result.data?.error);
            return;
        }

        var token = result.data;
        login(token);
        setLoginfailed(false);
    }

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppForm
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => handleSubmit(values)}
                validationSchema={schema}
            >
                <ErrorMsg error={loginErrMsg} visible={loginFailed}/>
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    icon="email"
                    placeholder="Email" />
                <AppFormField
                    name="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    icon="lock"
                    placeholder="Password" />
                <SubmitBtn title="Log In" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default LoginScreen;