// Import Librarys for making a component
import React from 'react';
import {Text, View} from 'react-native';

// Make a component
const Header = () => {
    const {textStyle, viewStyle} = styles;


    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
        
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.6,
        elevation: 16,
        backgroundColor: "#0000"
    },
    textStyle: {
        fontSize: 20
    }
}

// Make the component available to other parts of the app
export default Header;