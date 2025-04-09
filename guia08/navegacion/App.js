import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'; // Importa el componente de pantalla HomeScreen
import DetailsScreen from './src/screens/DetailsScreen'; // Importa el componente de pantalla DetailsScreen


// Crea el Drawer Navigator
const Drawer = createDrawerNavigator();
export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Details" component={DetailsScreen} />
</Drawer.Navigator>
</NavigationContainer>
);
}

