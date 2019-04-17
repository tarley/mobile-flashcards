import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Container, Content, Text, Button, Input, Form, Item, Label} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';


export default class NovaQuestaoView extends Component {
    state = {
        pergunta: '',
        resposta: ''
    }
    voltar() {
        this.props.navigation.goBack()
    }
    criarQuestao() {
        const baralho = this.props.navigation.getParam('baralho');
        const {pergunta, resposta} = this.state;
        
        if(!pergunta || pergunta.trim().length === 0){
            Alert.alert('Nova questão', 'Favor informar uma pergunta para a questão.');
            return;
        }
        
        if(!resposta || resposta.trim().length === 0){
            Alert.alert('Nova questão', 'Favor informar uma resposta para a questão.');
            return;
        }

        BaralhoRepository.adicionarQuestao(baralho.titulo, pergunta, resposta)
            .then(() => {
                this.props.navigation.state.params.atualizarBaralho();
                this.voltar();
            });
       
    }
    render() {
        return (
            <Container>
                <AppHeader 
                    subtitulo='Nova Questão'
                    botaoEsquerdo={() => this.voltar()}
                />
                
                <Content padder contentContainerStyle={styles.container}>
                    <Form>
                        <Text style={styles.titulo}>Qual é a nova questão do baralho?</Text>
                        <Item floatingLabel style={styles.input}>
                            <Label>Pergunta</Label>
                            <Input 
                                inputContainerStyle={styles.input}
                                onChangeText={(pergunta) => this.setState({pergunta})} 
                            />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Resposta</Label>
                            <Input 
                                inputContainerStyle={styles.input}
                                onChangeText={(resposta) => this.setState({resposta})} 
                            />
                        </Item>
                        
                        <Button block success 
                            onPress={() => this.criarQuestao()}
                            style={styles.botaoAcao}
                        >
                            <Text>Enviar</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 36,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    input: {
        marginBottom: 20
    },
    botaoAcao: {
        marginBottom: 10
    }
});