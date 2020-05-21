import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
const Login = ({ navigation, ...props }) => {

    const _toRegister = () => {
        navigation.navigate('Reset')
    }

    return (
        <View style={styles.container}>
            <Text>This is the Login screen</Text>
            <Button
            onPress={_toRegister}
                mode="contained"
            >
                Press Me
            </Button>
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