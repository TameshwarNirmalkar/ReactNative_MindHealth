// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import SongScreen from './SongsScreen';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const songScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SongScreen">
      <Stack.Screen
        name="SongScreen"
        component={SongScreen}
        options={{
          title: 'Song List', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#307ecc',
        activeBackgroundColor: "#307ecc",
        color: '#307ecc',
        itemStyle: {marginVertical: 2},
        labelStyle: {
          color: '#ffffff',
        },
      }}
      screenOptions={{headerShown: true}}>
      <Drawer.Screen
        name="Songs"
        options={{
          drawerLabel: 'Songs',
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff'
          },
        }}
        component={SongScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;