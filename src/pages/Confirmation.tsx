import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/button';

export function Confirmation(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
        😊
      </Text>
      <Text style={styles.title}>
        Prontinho.
      </Text>
      <Text style={styles.subtitle}>
        Agora vamos começar a cuidar das suas
        plantinhas com muito cuidado.
      </Text>
 
      <View style={styles.footer}>
        <Button title="Começar"/>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-around',
  },
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    padding: 30,
  },
  title:{
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle:{
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.heading,
    paddingVertical:10,
  },
  emoji:{
    fontSize: 78,
  },
  footer:{
    width: '100%',
    paddingHorizontal: 75,
    marginTop: 20,
  },
})
