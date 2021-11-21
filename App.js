
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "./pages/Home";
import Products from './pages/Products'
import Categories from './pages/Categories'
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <NavigationContainer nitialRouteName="Home">
         <Stack.Navigator>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='Produtos' component={Products}/>
            <Stack.Screen name='Categorias' component={Categories}/>
         </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
