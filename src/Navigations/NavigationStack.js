import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Timeline from '../Screens/TimeLine';
import Cast from '../Component/Cast';
import Social from '../Component/Social';
import CastSocial from '../Component/CastSocial';
import CastNews from '../Component/CastNews';
import CastBlog from '../Component/CastBlog';
import Script from '../Component/Script';
import ScriptEng from '../Component/ScriptEng';
import Music from '../Component/Music';
import UserProfile from '../Component/UserProfile';
import SocialUserProfile from '../Component/SocialUserProfile';

const Stack = createNativeStackNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="Cast" component={Cast} />
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="CastSocial" component={CastSocial} /> 
        <Stack.Screen name="CastNews" component={CastNews} /> 
        <Stack.Screen name="CastBlog" component={CastBlog} /> 
        <Stack.Screen name="Script" component={Script} /> 
        <Stack.Screen name="ScriptEng" component={ScriptEng} /> 
        <Stack.Screen name="Music" component={Music} /> 
        <Stack.Screen name="UserProfile" component={UserProfile} /> 
        <Stack.Screen name="SocialUserProfile" component={SocialUserProfile} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
