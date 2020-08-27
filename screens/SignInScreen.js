import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/context';


const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
    const { signIn } = React.useContext(AuthContext);

    const onChangeText = (val) => {
        setData({ ...data, username: val, check_textInputChange: val.length !== 0 });
    }

    const onChangePassword = (val) => {
        setData({ ...data, password: val });
    }

    const updateSecurityTextEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>

                {/* Username */}
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput placeholder="Jon Snow" style={styles.textInput} autoCapitalize="none" onChangeText={(val) => onChangeText(val)}/>
                    { data.check_textInputChange ? <Feather name="check-circle" color="green" size={20}/> : null } 
                </View>

                {/* Password */}
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <TextInput placeholder="Password" secureTextEntry={data.secureTextEntry} style={styles.textInput} autoCapitalize="none" onChangeText={(val) => onChangePassword(val)}/>
                    <TouchableOpacity onPress={updateSecurityTextEntry}><Feather name="eye-off" color="grey" size={20}/></TouchableOpacity>
                </View>

                {/* Sign in button */}
                <View>
                    <TouchableOpacity style={[styles.signIn, {color: '#009387', borderWidth: 1, marginTop: 35, borderColor: '#009387'}]}  onPress={(username) => signIn(data.username)}>
                        <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign up button */}
                <View>
                    <TouchableOpacity style={[styles.signIn, {color: '#009387', borderWidth: 1, marginTop: 15, borderColor: '#009387'}]} onPress={() => navigation.navigate("SignUpScreen")}>
                        <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

export default SignInScreen;