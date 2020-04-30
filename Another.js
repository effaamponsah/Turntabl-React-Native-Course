import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Another extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dennis'
        };
    }
    

    buttonPressed=()=> {
        this.setState({name:'Isaac'})
    }

    render() {
        return (
            <View>
                <Text > This is {this.props.person_name} </Text>
                <TouchableOpacity 
                onPress={this.buttonPressed}
                style={{ height: 20, width: 100, backgroundColor: 'blue' }}>
                    <Text>Press me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
