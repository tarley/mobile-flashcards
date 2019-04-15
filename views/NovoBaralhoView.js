import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Input } from 'react-native-elements';
import {Container, Content, Text, Button} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';


export default class NovoBaralhoView extends Component {
    state = {
        titulo: ''
    }
    voltar() {
        this.props.navigation.goBack()
    }
    criarBaralho() {
        const {titulo} = this.state;
        
        if(titulo && titulo !== '') {
            BaralhoRepository.adicionar(titulo);
            this.props.navigation.state.params.atualizarView();
            this.voltar();
        } else {
            Alert.alert('Novo baralho', 'Titulo do baralho inválido.');
        }
    }
    render() {
        return (
            <Container>
                <AppHeader 
                    subtitulo='Resultado do Quiz'
                    botaoEsquerdo={() => this.voltar()}
                />
                <Content padder contentContainerStyle={styles.container}>
                    <Text style={styles.titulo}>Qual é o nome do seu novo baralho?</Text>
                    <Input 
                        placeholder='Titulo do baralho'
                        inputContainerStyle={styles.input}
                        onChangeText={(titulo) => this.setState({titulo})} 
                    />
                    <Button block success 
                        onPress={() => this.criarBaralho()}
                        style={styles.botaoAcao}
                    >
                        <Text>Enviar</Text>
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
        fontSize: 36,
        color: 'black',
        marginBottom: 10,
        textAlign: 'center'
    },
    input: {
        marginBottom: 10
    },
    botaoAcao: {
        marginBottom: 10
    }
});