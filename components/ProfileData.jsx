import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ProfileData = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/image.png")}
          className="w-screen h-44"
        />
        <TouchableOpacity className="absolute right-4 py-2 ">
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between items-center -mt-12 px-4">
        <Image
          source={require("../assets/profile.png")}
          className="w-32 h-32 border-white border-4 rounded-full"
        />
        {/* edit icon */}
        <TouchableOpacity>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
     
    </ScrollView>
  );
};

export default ProfileData;

const styles = StyleSheet.create({});
