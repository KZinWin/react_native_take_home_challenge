import { createContext, useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from "../essential/components/Styles";
import { AuthContext } from "../../App";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPswd] = useState('');
    const { signIn } = useContext(AuthContext);

    
    return (
        <View style={[Styles.PrimaryBgColor, { flex: 1 }]}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={Styles.loginCard}>
                <Text style={Styles.h1}>Log-in</Text>
                <View style={Styles.form}>
                    <TextInput style={Styles.textInput} placeholder='email' value={email} onChange={(val) => setEmail(val)}/>
                    <TextInput style={Styles.textInput} placeholder='password' value={password} onChange={(val) => setPswd(val)} />
                </View>
                <TouchableOpacity style={[Styles.yellowBtn,{marginBottom: -10}]} onPress={() => signIn({email,password})} >
                    <Text style={Styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;