import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-simple-star-rating';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseColorScreen from './ChooseColorScreen';

const MainScreen = ({ navigation }) => {
  const [userRating, setUserRating] = useState(0);
  const handleRating = (rate) => {
    setUserRating(rate);
  };

  return (
    <View>
      <Image
        source={require('./IMG/iplmao.jpg')}
        style={styles.Image}
      />
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <Text style={styles.danhgiachu}>(Xem 828 đánh giá)</Text>
      <Rating
        style={styles.danhgia}
        ratingValue={userRating}
        size={35}
        fillColor="orange"
        starCount={5}
        onRate={handleRating}
        onPointerEnter={() => console.log('Enter')}
        onPointerLeave={() => console.log('Leave')}
        onPointerMove={(value, index) => console.log(value, index)}
      />
      <Text style={styles.tiengiam}>1.790.000 đ</Text>
      <Text style={styles.tiengoc}>1.790.000 đ</Text>
      <Text style={styles.text1}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      <Image source={require('./IMG/hoicham.jpg')} style={styles.hoicham} />
      <Image source={require('./IMG/muiten.jpg')} style={styles.muiten}/>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChooseColorScreen')}
        style={styles.button} // Thay đổi kiểu của TouchableOpacity
      >
        <Text style={styles.buttonText}>4 MÀU- CHỌN MÀU</Text> {/* Thêm kiểu cho nút */}
      </TouchableOpacity>

        <View style = {styles.Textchonmua}>
        <Text style = {styles.chonmua}>CHỌN MUA</Text>
        </View>

    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitle: null,
            headerTitleStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen name="ChooseColorScreen" component={ChooseColorScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
    width: 301,
    height: 361,
    position: 'absolute',
    left: 39,
  },
  title: {
    top:370,
    fontSize: 18,
    left:20,
    fontWeight: 400,
  },
  danhgia: {
    top:350,
    flexDirection: 'row',
    left: 10,
  },
  danhgiachu: {
    flexDirection: 'row',
    fontSize: 20,
    left: 200,
    top:380
  },
  tiengiam: {
    textDecorationLine: 'line-through',
    fontSize: 19,
    top:350,
    left: 200,
  },
  tiengoc: {
    fontWeight: 'bold',
    fontSize: 24,
    top:320,
    left: 20,
  },
  text1: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
    top:320,
    left:20,
  },
  muiten:{
    width: 18,
    height: 18,
    top:324,
    left: 320,
  },
  hoicham: {
    width: 25,
    height: 25,
    top:300,
    left: 240,
  },
  button: {
    padding: 10,
    borderRadius: 10, // Điều chỉnh độ cong của khung
    borderWidth: 1, // Độ dày của khung
    borderColor: 'black', // Màu sắc của khung
    alignItems:'center',
    height:30,
    width:332,
    top:280,
    left:32,
    marginTop: 20,
  },
  buttonText: {
    color: 'black', // Thay đổi màu sắc của văn bản
    fontSize:17,
    fontWeight:400,
    top:-5,
  },
  Textchonmua: {
    padding: 10,
    borderRadius: 10, // Điều chỉnh độ cong của khung
    borderWidth: 1, // Độ dày của khung
    borderColor:'red', // Màu sắc của khung
    backgroundColor:'red',
    alignItems:'center',
    height:50,
    width:350,
    top:300,
    left:20,
    marginTop: 20,
  },
  chonmua:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  }
};

export default App;
