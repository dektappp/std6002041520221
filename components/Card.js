import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './Cardsection.js';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection />
                <CardSection />
                <CardSection />
                
            </View>
        );
    }
}

export default Card;