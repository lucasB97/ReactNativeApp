import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#9bc9d4',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
});

export default Header;
