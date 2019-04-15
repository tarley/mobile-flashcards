import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';


export default class BaralhoView extends Component {

    voltar() {
        this.props.navigation.navigate('Home')
    }
    iniciarQuiz() {
        const baralho = this.props.navigation.getParam('baralho');
        this.props.navigation.navigate('Quiz', {baralho});
    }
    render() {
        const baralho = this.props.navigation.getParam('baralho');
        const qtd = baralho.questoes.length;

        return(
            <Container>
                <AppHeader 
                    botaoEsquerdo={() => this.voltar()} />
                <Content padder contentContainerStyle={styles.container}>
                    <Text style={styles.titulo}>{baralho.titulo}</Text>
                    <Text style={styles.qtdQuestoes}>{`${qtd} ${qtd == 1 ? 'Card' : 'Cards'}`}</Text>
                    <Button block success 
                        style={styles.botaoAcao}
                    >
                        <Text>Add Card</Text>
                    </Button>
                    <Button block dark 
                        style={styles.botaoAcao}
                        onPress={() => this.iniciarQuiz()}
                        disabled={qtd == 0}
                    >
                        <Text>Start Quiz</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 32,
        color: 'black',
        marginBottom: 10
    },
    qtdQuestoes: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 16,
        color: 'gray',
        marginBottom: 50
    },
    botaoAcao: {
        marginBottom: 10
    }
});