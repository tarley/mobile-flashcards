import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Subtitle, Right, Text} from 'native-base';


export default function AppHeader() {
    return(
        <Header style={{marginTop:StatusBar.currentHeight}} >
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Flashcards</Title>
                <Subtitle>Escolha um baralho</Subtitle>
            </Body>
            <Right>
                <Button transparent>
                    <Text>Cancel</Text>
                </Button>
            </Right>
        </Header>
    );
}