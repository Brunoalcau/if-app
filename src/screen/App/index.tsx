import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Icon, Text } from "native-base";
import { theme } from "native-base";
import { useNavigation } from "@react-navigation/native";

import Home from "../Home";
import Profile from "../Profile";
import ReportCard from "../ReportCard";
import Time from "../Time";

const Tab = createBottomTabNavigator();
// <i class="fa-solid fa-magnifying-glass"></i>
function ProjectStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.orange[400],
        tabBarInactiveTintColor: theme.colors.black,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: "30px 30px 0 0",
          borderTopWidth: "0px",
          paddingBottom: 20,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                style={{ width: 26 }}
                color={focused && "green.400"}
                as={FontAwesome5}
                name="house-user"
                size="lg"
              />
              {focused && <Text color="green.400">Home</Text>}
            </>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Boletim",
          tabBarIcon: ({ focused, ...props }) => (
            <>
              {console.log(props)}

              <Icon
                color={focused && "green.400"}
                as={FontAwesome5}
                name="file"
                size="lg"
              />

              {focused && <Text color="green.400">Boletim</Text>}
            </>
          ),
        }}
        name="Boletim"
        component={ReportCard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Pedir Auxilio",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                color={focused && "green.400"}
                as={FontAwesome5}
                name="clock"
                size="lg"
              />
              {focused && <Text color="green.400">Horário</Text>}
            </>
          ),
        }}
        name="Pedir Auxilio"
        component={Time}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                color={focused && "green.400"}
                as={FontAwesome5}
                name="user"
                size="lg"
              />
              {focused && <Text color="green.400">Conta</Text>}
            </>
          ),
        }}
        name="Account"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default ProjectStack;
