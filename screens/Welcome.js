import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Title, Paragraph, Caption } from 'react-native-paper';

const SCREEN = Dimensions.get('window')

const Welcome = ({ navigation, ...props }) => {

    const _toRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.title}>
                <Title style={{ fontSize: 25 }}>Sign Up or Log in</Title>
            </View>

            {/* Paragraph */}
            <View style={styles.paragraph}>
                <Paragraph>Dont worry, we dont share your data with pros</Paragraph>
            </View>

            {/* Caption */}
            <View style={{ marginTop: 20 }}>
                <Caption>By tapping on Continue with Facebook, Google, Email, you agree to the <Text style={{ color: '#18be6a', textDecorationLine: 'underline' }} onPress={() => alert("Yes")}>Terms of Service</Text> and <Text style={{ color: '#18be6a', textDecorationLine: 'underline' }} onPress={() => alert("Yes")}>Privacy Policy</Text>
                </Caption>
            </View>

            {/* Facebook button */}
            <View style={{ marginTop: 25 }}>
                <Button
                    style={{ height: 45, justifyContent: "center" }}
                    icon="facebook-box" mode="contained" dark={true} uppercase={false} color="#3b5999"
                >
                    Continue with Facebook
                </Button>
            </View>

            {/* Google */}
            <View style={{ marginTop: 25 }}>
                <Button
                    style={{ height: 45, justifyContent: "center" }}
                    icon="google" mode="outlined" dark={true} uppercase={false} color="#000"
                >
                    Continue with Google
                </Button>
            </View>


            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Caption>
                    Or
                </Caption>
            </View>


            {/* Google */}
            <View style={{ marginTop: 10 }}>
                <Button
                    onPress={_toRegister}
                    style={{ height: 45, justifyContent: "center" }}
                    icon="google" mode="contained" dark={true} uppercase={false}
                >
                    Continue with Email
                </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: SCREEN.width / 25,
        paddingRight: SCREEN.width / 25
    },
    title: {
        marginTop: SCREEN.height / 5
    },
    paragraph: {
        width: SCREEN.width / 1.8,
        marginTop: 15
    }
})

export default Welcome;