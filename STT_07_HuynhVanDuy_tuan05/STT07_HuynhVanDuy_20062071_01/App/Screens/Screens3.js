import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Components/Sc3/header";
import Footer from "../Components/Sc3/footer";

const Screens3 = () => {
  return (
    <LinearGradient
      colors={["#cbf4f6","#d5f4f6", "#e1f5f6", "#2ad4f8"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <Header/>
        <Footer/>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});


export default Screens3;