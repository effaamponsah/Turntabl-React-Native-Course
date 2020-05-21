import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import ResetPasword from '../screens/ResetPasword';

const Auth = createStackNavigator()

const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen
                name="Welcome"
                component={Welcome}

            />
            <Auth.Screen
                name="Login"
                component={Login}
            />
            <Auth.Screen
                name="Register"
                component={Register}
            />

            <Auth.Screen
                name="Reset"
                component={ResetPasword}
            />
        </Auth.Navigator>

    );
}

export default AuthStack;