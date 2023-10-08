import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện icon (FontAwesome hoặc các loại khác)

const App = () => {
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  const toggleIncludeLowercase = () => {
    setIncludeLowercase(!includeLowercase);
  };

  const toggleIncludeUppercase = () => {
    setIncludeUppercase(!includeUppercase);
  };

  const toggleIncludeNumbers = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const toggleIncludeSpecialSymbol = () => {
    setIncludeSpecialSymbol(!includeSpecialSymbol);
  };

  return (
    <View style={[styles.container,styles.outerBorder]}>
      <View style={styles.background}></View>
      <View style={styles.passwordGeneratorContainer}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <TextInput
          style={styles.txtPassword}
          placeholder=""
          placeholderTextColor="white"
        />
        <View style={styles.passwordLengthContainer}>
          <Text style={styles.passwordLengthLabel}>Password length:</Text>
          <TextInput
            style={styles.passwordLengthInput}
            placeholder="12"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={toggleIncludeLowercase}
          >
            {includeLowercase && (
              <Icon name="check-circle" size={40} color="40" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Include lower case letters:</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={toggleIncludeUppercase}
          >
            {includeUppercase && (
              <Icon name="check-circle" size={40} color="black" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Include upper case letters:</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={toggleIncludeNumbers}
          >
            {includeNumbers && (
              <Icon name="check-circle" size={40} color="black" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Include numbers:</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={toggleIncludeSpecialSymbol}
          >
            {includeSpecialSymbol && (
              <Icon name="check-circle" size={40} color="black" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Include special symbol:</Text>
        </View>
        <TouchableOpacity style={styles.btnGenerate}>
          <Text style={styles.btnGenerateText}>GENERATE PASSWORD</Text>
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
    top:-10,
    backgroundColor: '#3B3B98'
  },
  outerBorder: { // Thêm style cho viền ngoài
    borderWidth: 20,
    marginleft:100,
    borderColor: '#3B3B98',
  },
  background: {
    width: 360,
    height: 640,
    backgroundColor: '#23235B',
  },
  passwordGeneratorContainer: {
    position: 'absolute',
    top: 59,
    left: 0,
    alignItems: 'center',

  },
  title: {
    width: 181,
    height: 64,
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    fontFamily:'foboto',
    textAlign:'center',
    marginBottom: 10,
  },
  txtPassword: {
    width: 340,
    height: 65,
    fontSize: 18,
    color: 'while', 
    backgroundColor:'#151537',
    marginLeft:10,
    marginTop: 30,
  },
  passwordLengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft:0,
  },
  passwordLengthLabel: {
    fontSize: 24,
    top:3,
    left:-10,
    fontFamily:'foboto',
    color: 'white',
  },
  passwordLengthInput: {
    width: 125,
    height: 35,
    fontSize: 22,
    color: 'black',
    backgroundColor:'white',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top:20,
    marginTop: 20,
    left:120,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'white',
    checkbox:'center',
    marginRight: -310,
  },
  checkboxLabel: {
    fontSize: 22,
    fontFamily:'foboto',
    fontWeight: '700',
    color: 'white',
  },
  btnGenerate: {
    width: 320,
    height: 65,
    top: 50,
    left: 10,
    backgroundColor: '#3B3B98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGenerateText: {
    Top:100,
    fontFamily:'Roboto',
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});

export default App;
