import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function tabela(){

    return(
        <View style={estilos.corpo}>
          <Image style={estilos.imagemRes} source={require('../aseets/tabela.jpeg')}/>
      </View>
    )
}

const estilos = StyleSheet.create({

    corpo: {
      padding: 10
    },
  
    imagemRes:{
        width: '100%',
        resizeMode: 'contain',
        marginTop: -50,
        borderRadius: 10
        
      }
  });
