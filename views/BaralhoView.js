import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';


export default class BaralhoView extends Component {
    state = {
        baralho: null,
        questoes: null
    }
    componentDidMount() {
        const baralho = this.props.navigation.getParam('baralho');

        this.setState({
            baralho,
            questoes: baralho.questoes
        })
    }
    voltar() {
        this.props.navigation.state.params.atualizarBaralhos();
        this.props.navigation.navigate('Home')
    }
    atualizarView = () => {
        
        const {baralho} = this.state;

        BaralhoRepository.buscarPorTitulo(baralho.titulo)
            .then((baralhoAtualizado) => 
                this.setState({
                    baralho: baralhoAtualizado,
                    questoes: baralhoAtualizado.questoes
                })
            )
    }
    iniciarQuiz() {
        const {baralho} = this.state;
        this.props.navigation.navigate('Quiz', {baralho});
    }
    adicionarQuestao() {
        const {baralho} = this.state;
        this.props.navigation.navigate('NovaQuestao', {
            baralho,
            atualizarBaralho: this.atualizarView
        });
    }
    render() {
        const {baralho, questoes} = this.state;

        return(
            <Container>
                <AppHeader 
                    botaoEsquerdo={() => this.voltar()} />
                { baralho && questoes && (
                    <Content padder contentContainerStyle={styles.container}>
                        <Text style={styles.titulo}>{baralho.titulo}</Text>
                        <Text style={styles.qtdQuestoes}>{`${questoes.length} ${questoes.length == 1 ? 'Card' : 'Cards'}`}</Text>
                        <Button block success 
                            style={styles.botaoAcao}
                            onPress={() => this.adicionarQuestao()}
                        >
                            <Text>Adicionar questão</Text>
                        </Button>
                        <Button block dark 
                            style={styles.botaoAcao}
                            onPress={() => this.iniciarQuiz()}
                            disabled={questoes.length == 0}
                        >
                            <Text>Iniciar Quiz</Text>
                        </Button>
                    </Content>
                )}
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