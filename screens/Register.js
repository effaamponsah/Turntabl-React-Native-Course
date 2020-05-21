import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Register = () => {
    return (
        <View style={styles.conatiner}>
            <Text>This is the register screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Register;