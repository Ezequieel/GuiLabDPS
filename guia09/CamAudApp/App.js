import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { CameraComponent } from './components/CameraComponent';
import { GalleryScreen } from './components/GalleryScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Camera') {
              iconName = 'camera';
            } else if (route.name === 'Galería') {
              iconName = 'photo-library'; // Icono para galería
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6c63ff',  
          inactiveTintColor: '#aaa',   
          style: { backgroundColor: '#fdfdfd', borderTopWidth: 0, elevation: 0 }, 
        }}
      >
        <Tab.Screen
          name="Camera"
          component={CameraComponent}
          options={{
            headerShown: false,
            tabBarLabel: 'Cámara',
            cardStyle: { backgroundColor: 'white' },
          }}
        />
        <Tab.Screen
          name="Galería"
          component={GalleryScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Galería',
            cardStyle: { backgroundColor: 'white' },
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
