// import library
import React, { Component } from 'react';
import { View, Text } from 'react-native'

// create component
class Header extends Component {
    render() {
        return (
            <View style={styles.Header}>
                <Text style={styles.Text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
// style
const styles = {
    Header: {
        padding: 50,
        alignItems: 'center'
    },
    Text: {
        fontSize: 50,
    }
}

// export
export default Header;