import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
const Functional = ({ person_name }) => {
    const [name, setName] = useState('Dennis')
    const [email, setEmail] = useState('')

    const buttonPressed = () => {
        setName('Mary')
    }


    useEffect(() => {
        console.log("Ama")
    }, [])

    return (
        <View>
            <Text>{name} open up App.js to start working on your app!</Text>
            <TouchableOpacity
                onPress={buttonPressed}
                style={{ height: 20, width: 100, backgroundColor: 'blue' }}>
                <Text>Yes</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Functional;