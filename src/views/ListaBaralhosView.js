import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Container, Content, Card} from 'native-base';

import * as BaralhoRepository from '../repositories/BaralhoRepository';

import AppHeader from '../components/AppHeader';
import Baralho from '../components/Baralho';


export default class ListaBaralhosView extends Component {
    state = {
        baralhos: []
    }
    componentDidMount() {
        BaralhoRepository.buscarTodos().then((baralhos) => {
            if(baralhos)
                this.setState({
                    baralhos: Object.values(baralhos)
                })

        })
    }
    render() {
        const {baralhos} = this.state;

        return(
            <Container>
                <AppHeader 
                    subtitulo='Escolha um baralho'/>
                <Content padder>
                    <Card >
                        <FlatList
                            data={baralhos}
                            keyExtractor={(item)=> item.titulo}
                            renderItem={({item}) => 
                                <Baralho 
                                    titulo={item.titulo} 
                                    cartas={item.cartas}
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