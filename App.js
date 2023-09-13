import * as React from 'react';
import { TextInput, KeyboardAvoidingView, StyleSheet, Text, Pressable, View  } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import AddAssignment from './components/AddAssignment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="AddAssignment" component={AddAssignment} options={{headerShown: false,}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

