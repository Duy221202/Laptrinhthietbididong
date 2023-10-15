import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const ChooseColorScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <Image
        source={require('./IMG/iplmao.jpg')}
        style = {styles.Image}
      />
      <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      <View style={styles.flex2}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <View style={styles.flex1}></View>
        <View style={styles.flex3}></View>
        <View style={styles.flex4}></View>
        <View style={styles.flex5}></View>
      </View>




      {/* Thêm mã cho việc chọn màu ở đây */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 112,
    height: 132,
    top:25,
    left: -120,

  },
  text1:{
    width: 164,
    height: 32,
    top:-80,
    left: 25,
    fontWeight: 600,
  },
  text2:{
    top:10,
    left:15,
    fontSize:18,
  },
  flex1:{
    backgroundColor:'#C5F1FB',
    width: 85,
    height:80,
    top:20,
    left:150,

  },
  flex2:{
    width: 400,
    height: 491,
    //top: -149,
    background:'#C4C4C4'

  },
  flex3:{
    backgroundColor:'#F30D0D',
    width: 85,
    height:80,
    top:40,
    left:150,
  },
  flex4:{
    backgroundColor:'black',
    width: 85,
    height:80,
    top:60,
    left:150,
  },
  flex5:{
    backgroundColor:'#234896',
    width: 85,
    height:80,
    top:80,
    left:150,
  },
  button: {
    padding: 10,
    borderRadius: 10, // Điều chỉnh độ cong của khung
    borderWidth: 1, // Độ dày của khung
    borderColor: '#234896', // Màu sắc của khung
    backgroundColor:'#234896',
    alignItems: 'center',
    height:40,
    width:332,
    top:-60,
    left:0,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    top:-5,
    color: 'white', // Thay đổi màu sắc của văn bản
    fontSize:20,
    
  },
};
export default ChooseColorScreen;
