import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';


export default function calcimc() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

 const calcImc = () => {
    if(peso == 0 || !peso){
        alert('Informe o Peso!')
        return
    }
    if(altura == 0 || !altura){
      alert('Informa a Altura!')
      return
    }

    const res = peso / (Math.pow(altura,2))
    setResultado(res.toFixed(1))
 }

  return (
    <View style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View style={estilos.corpo}>
        <Text>Digite o seu peso:</Text>
        <TextInput
          style={estilos.texto}
          autoFocus={true}
          keyboardType={'numeric'}
          onChangeText={text => setPeso(text)}
        />
      </View>
      <View style={estilos.corpo}>
        <Text>Digite a sua altura:</Text>
        <TextInput
          style={estilos.texto}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text => setAltura(text)}
        />
      </View>
      <View style={estilos.corpo}>
        <TouchableHighlight

          style={estilos.btnCal}
          onPress={() => calcImc()}

        >
          <Text style={estilos.textBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>

      <View style={estilos.corpo}>
        <Text>Resultado: {resultado}</Text>
      </View>
      
      <View style={estilos.corpo}>
          <Image style={estilos.imagemRes} source={require('../calcimc/tabela.png')}/>
      </View>
    </View>
  )

}

const estilos = StyleSheet.create({

  corpo: {
    padding: 10
  },

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

  imagemRes:{
    width: '100%'
  }

});