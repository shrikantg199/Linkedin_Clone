import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";
// if not signed in redirect to /signin
const TabLayout = () => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Redirect href={"/signin"} />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle: {
          marginBottom: -10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-extrabold" : "font-normal"
              } -mt-2 text-base`}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Video"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-extrabold" : "font-normal"
              } -mt-2 text-base`}
            >
              Video
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyNetwork"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-extrabold" : "font-normal"
              } -mt-2 text-base`}
            >
              My Network
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-extrabold" : "font-normal"
              } -mt-2 text-base`}
            >
              Notification
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Jobs"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? "font-extrabold" : "font-normal"
              } -mt-2 text-base`}
            >
              Jobs
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="business-center" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
