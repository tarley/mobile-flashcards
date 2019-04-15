import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Subtitle, Right, Text} from 'native-base';


export default function AppHeader({subtitulo, botaoEsquerdo, botaoDireita}) {

    let componenteEsquerda = ( <Left /> );

    if(botaoEsquerdo)
        componenteEsquerda = (
            <Left>
                <Button transparent onPress={botaoEsquerdo}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
        );

    let componenteDireita = (<Right/>)

    if(botaoDireita)
        componenteDireita = (
            <Right>
                <Button transparent onPress={botaoDireita}>
                    <Text>Novo Baralho</Text>
                </Button>
            </Right>
        );
    
    return(
        <Header style={{marginTop:StatusBar.currentHeight}} >
            {componenteEsquerda}
            <Body>
                <Title>Flashcards</Title>
                <Subtitle>{subtitulo}</Subtitle>
            </Body>
            {componenteDireita}
        </Header>
    );
}