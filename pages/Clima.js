import React from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import Header from './components/Header'

const Clima = ({ navigation, route }) => {

  return (
    <>
      <Header title="Weather Api" />
      <View style={styles.container}>
        <Text style={styles.title}></Text>
        <Text>Temperatura: {route.params.temperatura}</Text>
        <Text>Vento: {route.params.vento}</Text>
        <Text>Descrição: {route.params.descricao}</Text>
        <Text>Previsão do dia:</Text>
        <FlatList
          data={[
            { key: route.params.forecast.temperature },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <View style={styles.button}>
          <Button
            title="Voltar"
            onPress={() => { navigation.goBack() }}
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    padding: 10,
  },
});

export default Clima;
