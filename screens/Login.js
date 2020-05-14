import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation, ...props }) => {

    const _toRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Text>This is the Login screen</Text>

            <TouchableOpacity style={{ padding: 15, backgroundColor: 'blue' }} onPress={_toRegister}>
                <Text style={{ color: '#fff' }}>Press me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Login;