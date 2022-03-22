import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import VerifyOtp from '../screens/VerifyOtp';
import NameInfo from '../screens/NameInfo/index';
import EmailInfo from '../screens/EmailInfo';
import Permissions from '../screens/Permissions';
import Terms from '../screens/Terms';
import Privacy from '../screens/Policy';
import Introduction from '../screens/Introduction';
import Home from '../screens/Home';
import AddNew from '../screens/Home/features/AddNew';
import Expenses from '../screens/Home/features/Expenses';
import Account from '../screens/Home/features/Account';
import Track from '../screens/Home/features/Track';
import EditProfile from '../screens/EditProfile';
import RateUs from '../screens/RateUs';
import AboutUs from '../screens/AboutUs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#262A2D',
    height: 80,
  },
  // tabBarItemStyle: {}, // have to add later
};

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Account" {...{screenOptions}}>
      <Tab.Screen name="AddNew" component={AddNew} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Account"
        component={Account}
      />
      <Tab.Screen name="Track" component={Track} />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameInfo"
          component={NameInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailInfo"
          component={EmailInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Permissions"
          component={Permissions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RateUs"
          component={RateUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
