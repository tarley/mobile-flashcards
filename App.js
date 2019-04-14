import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Root, Container, Content, Spinner, Grid} from 'native-base';

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

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
        <Container >
          <Content contentContainerStyle={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </Content>
        </Container>
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
