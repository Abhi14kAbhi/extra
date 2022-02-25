import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import VerifyOtp from '../screens/VerifyOtp';
import NameInfo from '../screens/NameInfo/index';
import EmailInfo from '../screens/EmailInfo';
import Permissions from '../screens/Permissions';
import Terms from '../screens/Terms';
import Privacy from '../screens/Policy';

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
