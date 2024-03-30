import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Screens/UserScreens/Login";
import SignUp from "../Screens/UserScreens/SignUp";
import Profile from "../Screens/UserScreens/Profile";

const Stack = createNativeStackNavigator();
export default function UserNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      

    </Stack.Navigator>
  );
}
