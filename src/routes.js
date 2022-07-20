import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Search  from './screens/Search';
import Details from './screens/Details';

import COLORS from './config/COLORS';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'gray',
        
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          elevation: 0,
          height: 60,
        }
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View 
              style={ focused && { 
                backgroundColor: COLORS.primary,
                height: 50, 
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="home" size={22} color={focused ? '#fff' : color} />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name='Search' 
        component={Search} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View 
              style={ focused && { 
                backgroundColor: COLORS.primary,
                height: 50, 
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="search" size={22} color={focused ? '#fff' : 'gray'} />
            </View>
          )
        }}
      />
       <Tab.Screen 
        name='Favorite' 
        component={Search} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View 
              style={ focused && { 
                backgroundColor: COLORS.primary,
                height: 50, 
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="bookmark" size={22} color={focused ? '#fff' : color} />
            </View>
          )
        }}
      />
       <Tab.Screen 
        name='Profile' 
        component={Search} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View 
              style={ focused && { 
                backgroundColor: COLORS.primary,
                height: 50, 
                width: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Feather name="hexagon" size={22} color={focused ? '#fff' : color} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}