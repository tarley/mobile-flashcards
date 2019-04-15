import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Container, Content, Card} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';
import Baralho from '../components/Baralho';


export default class HomeView extends Component {
    state = {
        baralhos: []
    }
    componentDidMount() {
        this.atualizarView();
    }
    atualizarView = () => {
        BaralhoRepository.buscarTodos()
            .then((baralhos) => this.setState({
                baralhos: Object.values(baralhos)
            }))
    }
    selecionarBaralho(baralho) {
        this.props.navigation.navigate('Baralho', {baralho})
    }
    novoBaralho() {
        this.props.navigation.navigate('NovoBaralho', {
            atualizarView: this.atualizarView
        })
    }
    render() {
        console.log('ListaBaralhosView render')
        const {baralhos} = this.state;

        return(
            <Container>
                <AppHeader 
                    subtitulo='Escolha um baralho'
                    botaoDireita={() => this.novoBaralho()} />
                <Content padder>
                    <Card >
                        <FlatList
                            data={baralhos}
                            keyExtractor={(item)=> item.titulo}
                            renderItem={({item}) => 
                                <Baralho 
                                    titulo={item.titulo} 
                                    questoes={item.questoes}
                                    onPress={() => this.selecionarBaralho(item)}
                                />
                            }
                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});