import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Text, CardItem } from 'native-base';

export default function Baralho({titulo, cartas}) { 
    const qtd = cartas.length;

    return(
        <CardItem bordered button style={styles.cardItem} >
            <Body style={styles.cardBody}>
                <Text style={styles.nomeBaralho}>{titulo}</Text>
                <Text style={styles.qtdCartas}>{`${qtd} ${qtd == 1 ? 'Card' : 'Cards'}`}</Text>
            </Body>
        </CardItem>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        height: 100, 
        justifyContent: 'center'
    },
    cardBody: {
        alignItems: 'center'
    },
    nomeBaralho: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 20,
        color: 'black'
    },
    qtdCartas: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 12,
        color: 'gray'
    }
  });