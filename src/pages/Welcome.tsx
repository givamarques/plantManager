import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
      Gerencie {'\n'}
      suas plantas de {'\n'} 
      forma fácil
      </Text>

      <Image source={wateringImg} />

      <Text style={styles.subtitle}>
        Não esqueça de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
        <Text style={styles.button}>
          >
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',

},

title: {
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center',
  color: colors.heading,
  marginTop: 38,
},
subtitle: {
  fontSize: 18,
  textAlign: 'center',
  color: colors.heading,
  paddingHorizontal: 20,
},
button: {
  backgroundColor: colors.green,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 16,
  marginBottom: 10,
  height: 56,
  width: 56,
},
image: {
  width: 292,
  height: 284,
}
});