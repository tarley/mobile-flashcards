import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {Root, Container, Content, Spinner, Grid} from 'native-base';

import {createStackNavigator, createAppContainer} from 'react-navigation'

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import * as BaralhoRepository from './repositories/BaralhoRepository';
import * as NotificationUtil from './helpers/NotificationUtil';

import HomeView from './views/HomeView';
import BaralhoView from './views/BaralhoView';
import QuizView from './views/QuizView';
import NovoBaralhoView from './views/NovoBaralhoView';
import NovaQuestaoView from './views/NovaQuestaoView'


const MainNavigation = createStackNavigator({
  Home: {screen: HomeView},
  Baralho: {screen: BaralhoView},
  Quiz: {screen: QuizView},
  NovoBaralho: {screen: NovoBaralhoView},
  NovaQuestao: {screen: NovaQuestaoView}
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

    NotificationUtil.setLocalNotification();

    // Carga inicial da aplicação
    BaralhoRepository.removerTodos();
    BaralhoRepository.adicionar('JavaScript');
    BaralhoRepository.adicionar('React');
    BaralhoRepository.adicionar('React Native');
    
    await BaralhoRepository.adicionarQuestao('JavaScript', 'Does React Native work with Android?', 'Yes, it works');
    await BaralhoRepository.adicionarQuestao('JavaScript', 'Does React Native work with IOS?', 'Yes, it works, but more expensive');
    
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

