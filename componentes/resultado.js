import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => {

    return(
        <View style={estilos.corpo}>
            <Text>Resultado: {props.resultado}</Text>
      </View>
    )
}

const estilos = StyleSheet.create({

    corpo: {
      padding: 10
    },
  
  });
