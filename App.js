import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import {Provider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather name="plus" size={30}/>
                </TouchableOpacity>
              )
            }
          )}
          />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({navigation, route}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params?.id ?? 0})}>
                  <EvilIcons name="pencil" size={30}/>
                </TouchableOpacity>
              )
            }
          )}

        />
        <Stack.Screen name="Create" component={CreateScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
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
