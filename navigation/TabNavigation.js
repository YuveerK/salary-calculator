import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ExpensesScreen from "../screens/ExpensesScreen";
import { Ionicons } from "@expo/vector-icons";
import ProjectionsScreen from "../screens/ProjectionsScreen";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          paddingTop: 6,
          // ⭐ allow safe-area to fully control bottom padding
        },

        tabBarActiveTintColor: "#4EFFA1",
        tabBarInactiveTintColor: "#777",

        tabBarIcon: ({ color, focused }) => {
          const icons = {
            Home: focused ? "home" : "home-outline",
            Expenses: focused ? "wallet" : "wallet-outline",
            Projections: focused ? "stats-chart" : "stats-chart-outline",
          };

          return (
            <Ionicons
              name={icons[route.name]}
              size={focused ? 28 : 24}
              color={color}
              style={focused ? styles.activeGlow : {}}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Projections" component={ProjectionsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  activeGlow: {
    textShadowColor: "rgba(78,255,161,0.6)",
    textShadowRadius: 10,
  },
});
