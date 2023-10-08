import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.passwordGeneratorContainer}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <TextInput
          style={styles.txtPassword}
          placeholder="Lmao"
          placeholderTextColor="white"
        />
        <View style={styles.passwordLengthContainer}>
          <Text style={styles.passwordLength}></Text>
        </View>
        <View>
        <Text style={styles.passwordLengthLabel}>Password length:</Text>
          <TextInput 
          style={styles.rectangle17}
          placeholder='Mạnh'
          placeholderTextColor='black'
          />
        </View>
        <View style={styles.includeLowercaseContainer}>
          <Text style={styles.includeLowercaseLabel}>Include lower case letters:</Text>
        </View>
        <View style={styles.includeUppercaseContainer}>
          <Text style={styles.includeUppercaseLabel}>Include upper case letters:</Text>
        </View>
        <View style={styles.includeNumberContainer}>
          <Text style={styles.includeNumberLabel}>Include numbers:</Text>
        </View>
        <TouchableOpacity style={styles.btnGenerate}>
          <Text style={styles.btnGenerateText}>GENERATE PASSWORD </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    left: 10,

  },
  background: {
    width: 360,
    height: 640,
    backgroundColor: '#23235B',
  },
  passwordGeneratorContainer: {
    position: 'absolute',
    top: 59,
    left: 80,
    alignItems: 'center',
  },
  title: {
    width: 181,
    height: 64,
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
    
  },
  txtPassword: {
    width: 320,
    height: 55,
    fontSize: 18,
    color: 'white',
    backgroundColor:'#151537',
    marginLeft:-80,
    left:32,
    marginTop: 10,
  },
  passwordLengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  rectangle17:{
    width: 320,
    height: 55,
    fontSize: 18,
    color: 'white',
    backgroundColor:'#151537',
    marginLeft:-80,
    left:32,
    marginTop: 10,
  },
  passwordLengthLabel: {
    fontSize: 16,
    color: 'white',
  },
  passwordLength: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  includeLowercaseContainer: {
    position: 'absolute',
    width: 247,
    height: 27,
    top: 324,
    left: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  includeLowercaseLabel: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'white',
  },
  includeUppercaseContainer: {
    position: 'absolute',
    width: 206,
    height: 26,
    top: 379,
    left: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  includeUppercaseLabel: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'white',
  },
  includeNumberContainer: {
    position: 'absolute',
    width: 160,
    height: 25,
    top: 433,
    left: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  includeNumberLabel: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'white',
  },
  btnGenerate: {
    width: 269,
    height: 55,
    top: 300,
    left: -45,
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGenerateText: {
    fontSize: 20,
    left:0,
    fontWeight: '400',
    color: 'white',
  },
});

export default App;
