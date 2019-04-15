import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {Root, Container, Content, Spinner, Grid} from 'native-base';

import {createStackNavigator, createAppContainer} from 'react-navigation'

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import * as BaralhoRepository from './repositories/BaralhoRepository';
//import * as FlashCardsAPI from './repositories/FlashCardsAPI';

import HomeView from './views/HomeView';
import BaralhoView from './views/BaralhoView';
import QuizView from './views/QuizView';
import NovoBaralhoView from './views/NovoBaralhoView';


const MainNavigation = createStackNavigator({
  Home: {screen: HomeView},
  Baralho: {screen: BaralhoView},
  Quiz: {screen: QuizView},
  NovoBaralho: {screen: NovoBaralhoView}
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

    //FlashCardsAPI.clearDecks();
    /*
    await FlashCardsAPI.saveDeckTitle('JavaScript');
    await FlashCardsAPI.saveDeckTitle('React');
    await FlashCardsAPI.saveDeckTitle('ReactNative');

    await FlashCardsAPI.addCardToDeck({teste: 'aaaa', a: 'talsdjf'}, 'JavaScript')
    await FlashCardsAPI.addCardToDeck( {teste: '222', a: '1111'}, 'JavaScript')
    console.log('componentDidMount ')
    console.log(await FlashCardsAPI.getDecks())
    console.log('====================================')
    */

    BaralhoRepository.removerTodos();
    console.log('*** zerado ***')
    console.log(await BaralhoRepository.buscarTodos());
    //console.log(await BaralhoRepository.buscarPorTitulo('JavaScript'));

    
    /*
    try {
      Baralho.adicionarCartao('JavaScript', 'Teste?', '123');
    } catch(err) {
      console.log(err.message);
    }
    */

    
    BaralhoRepository.adicionar('JavaScript');
    console.log('*** Objeto JavaScript ***')
    console.log(await BaralhoRepository.buscarTodos());
    BaralhoRepository.adicionar('React');
    console.log('*** Objeto React ***')
    console.log(await BaralhoRepository.buscarTodos());



    console.log('*** Procurando 1 item ***')
    console.log(await BaralhoRepository.buscarPorTitulo('JavaScript'));
    //BaralhoRepository.salvar('React Native');
    
    BaralhoRepository.adicionarQuestao('JavaScript', 'Does React Native work with Android?', 'Yes, it works');
    console.log('*** Adicionando uma pergunta ***')
    console.log(await BaralhoRepository.buscarTodos());

    BaralhoRepository.adicionarQuestao('JavaScript', 'Does React Native work with IOS?', 'Yes, it works, but more expensive');
    console.log('*** Adicionando a segunda pergunta ***')
    console.log(await BaralhoRepository.buscarTodos());
    //console.log(await BaralhoRepository.buscarTodos());
    //console.log(await BaralhoRepository.buscarPorTitulo('JavaScript'));
    
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

