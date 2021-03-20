import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default props => {

    return(
        <View style={estilos.corpo}>
        <TouchableHighlight

          style={estilos.btnCal}
          onPress={() => props.aoClicar()}

        >
          <Text style={estilos.textBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
    )
}

const estilos = StyleSheet.create({

    corpo: {
      padding: 10
    },

  
    btnCal: {
      backgroundColor: '#048',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10
    },
  
    textBtn: {
      fontSize: 15,
      textTransform: 'uppercase',
      color: '#fff'
    },
  
  });
