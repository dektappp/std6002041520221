import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
           <View>
               <CardSection>
                <Image
                    style={{width: 100, height: 100 }}
                    source={{uri: 'https://images.unsplash.com/photo-1542601828-7ef7aca956b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'}}
                />
                <Text>Lambogini</Text>
                <Text>Earth Kung</Text>
               </CardSection>
               <CardSection>
                <Image
                    style={{width: 450, height: 300 }}
                    source={{uri: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}}
                />
               </CardSection>
               <CardSection>
                   <View style={styles.button}>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
                        <Button
                            title="Buy"
                        />
                    </View>
                   </View>
               </CardSection>
           </View> 
        );
    }
}

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}

export default Card;