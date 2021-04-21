import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

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

      <Image source={wateringImg} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça de regar suas plantas.{'\n'} 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.7}>
        <Text style={styles.buttonText}>
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
  justifyContent: 'space-around',

},

title: {
  fontSize: 40,
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
buttonText: {
  color: colors.white,
  fontSize: 22,
},
image: {
  height: Dimensions.get('window').width * 0.8,
}
});