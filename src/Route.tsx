import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screen/Login";
import App from "./screen/App";
import AppointmentScheduling from "./screen/AppointmentScheduling";
import VaccinationCard from "./screen/VaccinationCard";
import AskForHelp from "./screen/AskForHelp";
import Notification from "./screen/Notification";
import NewAskForHelp from "./screen/NewAskForHelp";
import ReportCard from "./screen/ReportCard";

const Stack = createNativeStackNavigator();

function AppScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="App"
          component={App}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AppointmentScheduling"
          component={AppointmentScheduling}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AskForHelp"
          component={AskForHelp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaccinationCard"
          component={VaccinationCard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewAskForHelp"
          component={NewAskForHelp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ReportCard"
          component={ReportCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppScreen;
