import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {Root, Container, Content, Spinner, Grid} from 'native-base';

import {createStackNavigator, createAppContainer} from 'react-navigation'

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import ListaBaralhosView from './src/views/ListaBaralhosView';
//import Baralho from './src/models/Baralho';
import * as Baralho from './src/repositories/BaralhoRepository';


const MainNavigation = createStackNavigator({
  Home: {screen: ListaBaralhosView}
},
{
  headerMode: 'none'
});

const Routes = createAppContainer(MainNavigation);

export default class App extends React.Component {
  state = { 
    loading: true 
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    Baralho.removeAll();
    
    console.log(await Baralho.buscarTodos());
    console.log(await Baralho.buscarPorTitulo('JavaScript'));

    /*
    try {
      Baralho.adicionarCartao('JavaScript', 'Teste?', '123');
    } catch(err) {
      console.log(err.message);
    }
    */

    /*
    Baralho.salvar('JavaScript');
    Baralho.salvar('React');
    Baralho.salvar('React Native');

    Baralho.adicionarCartao('JavaScript', 'Teste?', '123');
    Baralho.adicionarCartao('JavaScript', 'Teste2?', '876');

    console.log(await Baralho.buscarTodos());
    console.log(await Baralho.buscarPorTitulo('JavaScript'));
    */
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <Container >
            <Content contentContainerStyle={styles.container}>
              <Spinner color='blue' />
            </Content>
          </Container>
        </Root>
      );
    }

    return (
      <Root>
          <Routes />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

