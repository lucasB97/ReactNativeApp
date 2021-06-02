import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from './components/Header'
import { TextInput } from 'react-native-gesture-handler';
import {consultarClima} from '../services/apiWeather';

const Home = ({navigation}) => {

  const [cidade, setClima] = React.useState('');

  const buscar = async () => {
    const tempo = await consultarClima(cidade);
    navigation.navigate('Clima', tempo);
  };

    return (
        <>
            <Header title="Weather Api" />
            <View style={styles.container}>
                <Text style={styles.title} >Digite sua cidade</Text>
                <View style={styles.button}>
                  <TextInput style={styles.input} onChangeText={(texto) => setClima(texto)}/>
                  <Button
                      title="Clique aqui para consultar o clima"
                      onPress={() => {buscar()}}
                  />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9bc9d4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      textAlign: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
    },
    button: {
      padding: 10,
    },
  });

export default Home;
