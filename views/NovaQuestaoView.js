import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';


export default class NovaQuestaoView extends Component {
    state = {
        index: 0,
        exibirResposta: false,
        acertos: 0,
        erros: 0
    }
    voltar() {
        this.props.navigation.navigate('Home')
    }

    componenteResposta(questao) {
        if(this.state.exibirResposta)
            return ( <Text style={styles.resposta}>{questao.resposta}</Text> )
        else
            return ( 
                <Button block info 
                    style={styles.botaoResposta}
                    onPress={() => this.setState({ exibirResposta: true})}>
                    <Text>Ver resposta</Text>
                </Button>
            )
    }
    
    quizQuestoes() {
        const baralho = this.props.navigation.getParam('baralho');
        const {index, acertos, erros} = this.state;
        const questao = baralho.questoes[index]

        return (
            <Content padder contentContainerStyle={styles.container}>
                <Text style={styles.titulo}>Qual é o nome do seu novo baralho?</Text>
                <Form>
                    <Item floatingLabel rounded>
                        <Label>Titulo do baralho</Label>
                        <Input />
                    </Item>
                </Form>
                <Button block success 
                    onPress={() => 
                        this.setState({
                            acertos: acertos + 1,
                            index: index + 1,
                            exibirResposta: false
                        })
                    }
                    style={styles.botaoAcao}
                >
                    <Text>Enviar</Text>
                </Button>
            </Content>
        )
    }

    quizResultado() {
        const baralho = this.props.navigation.getParam('baralho');
        const {acertos} = this.state;
        
        let totalAcertos = acertos * 100 / baralho.questoes.length

        return (
            <Content padder contentContainerStyle={styles.container}>
                <Text style={styles.tituloResultado}>{`${totalAcertos}%`}</Text>
                <Text style={styles.subtituloResultado}>Correto!</Text>
            </Content>
        )
    }
    render() {
        const baralho = this.props.navigation.getParam('baralho');
        const {index} = this.state;

        if(index < baralho.questoes.length)
            return(
                <Container>
                    <AppHeader 
                        subtitulo={`Quiz ${index + 1}/${baralho.questoes.length}`}
                        botaoEsquerdo={() => this.voltar()} 
                    />
                    {this.quizQuestoes()}
                </Container>
            );
        else
            return (
                <Container>
                    <AppHeader 
                        subtitulo='Resultado do Quiz'
                        botaoEsquerdo={() => this.voltar()}
                    />
                    {this.quizResultado()}
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
        fontSize: 36,
        color: 'black',
        marginBottom: 10,
        textAlign: 'center'
    },
    resposta: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 22,
        color: 'red',
        marginBottom: 50
    },
    botaoResposta: {
        marginBottom: 50
    },
    botaoAcao: {
        marginBottom: 10
    },
    tituloResultado: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 56,
        color: 'blue',
        textAlign: 'center'
    },
    subtituloResultado: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 32,
        color: 'blue',
        textAlign: 'center'
    }
});