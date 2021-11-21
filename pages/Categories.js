import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function Produto() {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}> 
        <Text style={styles.texth1}>Cadastre a Categoria</Text>
        <View style={styles.containerInput}>
          <TextInput style={styles.textInput} placeholder="Categoria" />
          <TouchableOpacity style={styles.button}>
            <Text>Cadastrar uma Categoria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C99F42",
  },
  containerForm:{
    alignItems:'center',
    marginTop:100
  },
  containerInput:{
    alignItems:'center',
  },
  texth1:{
   fontSize:24,
   color:'#fff'
  },
  textInput: {
    width: 300,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  button:{
    width:200,
    height:50,
    backgroundColor:'#57C998',
    marginLeft:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
});