import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import {Provider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen}/>
        <Stack.Screen name="Show" component={ShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
};
