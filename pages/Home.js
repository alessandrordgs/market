import { StatusBar } from "expo-status-bar";
import ShopImg from "../assets/img.png";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
export default function Home({navigation}) {

  function handleNavigation(){
    navigation.navigate('Produtos')
  }
  function gotToCategories(){
    navigation.navigate('Categorias')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.Img} source={ShopImg} />
      <Text style={styles.textH1}>Quero cadastrar</Text>
      <View>
        <TouchableOpacity onPress={handleNavigation} style={styles.containerButton}>
          <Text style={styles.text}>um produto</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={gotToCategories} style={styles.containerButton}>
          <Text style={styles.text}>uma categoria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E9E2",
    alignItems: "center",
    justifyContent: "center",
  },
  Img:{
    width:350,
    height:350
  },
  textH1:{
    fontSize:30
  },
  containerButton: {
    backgroundColor: "#57C998",
    width: 350,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 10,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
