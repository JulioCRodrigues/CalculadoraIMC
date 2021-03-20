import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default props => {

    return(
        <View style={estilos.bloco}>
        <Text>Digite a sua altura:</Text>
        <TextInput
          style={estilos.texto}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text => props.aoModificar(text)}
        />
      </View>
    )
}

const estilos = StyleSheet.create({

    bloco: {
        marginBottom: 20
    },
  
    texto: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 10,
    },
  });
