import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Container, Content, Text, Button, Input, Form, Item, Label} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';
import Baralho from '../components/Baralho';


export default class NovoBaralhoView extends Component {
    state = {
        titulo: ''
    }
    voltar() {
        this.props.navigation.goBack()
    }
    async criarBaralho() {
        const {titulo} = this.state;
        
        if(!titulo || titulo.trim().length === 0) {
            Alert.alert('Novo baralho', 'Favor informar um título para o baralho.');
            return
        }
        if(await BaralhoRepository.buscarPorTitulo(titulo)) {
            Alert.alert('Novo baralho', 'Já existe um baralho com esse nome.');
            return
        }

        
        await BaralhoRepository.adicionar(titulo)
        //this.props.navigation.state.params.atualizarBaralhos();
        const baralho = await BaralhoRepository.buscarPorTitulo(titulo);
        this.props.navigation.navigate('Baralho', {
            baralho,
            atualizarBaralhos: this.props.navigation.state.params.atualizarBaralhos
        })
        //this.voltar();
    }
    render() {
        return (
            <Container>
                <AppHeader 
                    subtitulo='Novo baralho'
                    botaoEsquerdo={() => this.voltar()}
                />
                <Content padder contentContainerStyle={styles.container}>
                    <Form>
                        <Text style={styles.titulo}>Qual é o nome do seu novo baralho?</Text>
                        
                        <Item floatingLabel style={styles.input}>
                            <Label>Titulo do baralho</Label>
                            <Input onChangeText={(titulo) => this.setState({titulo})} />
                        </Item>
                        
                        <Button block success 
                            onPress={() => this.criarBaralho()}
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