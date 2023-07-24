import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';

const HeaderSection = ({ handler, isFav = false }) => {
  const route = useRoute();   const navigation = useNavigation(); 

  const currentRoute = route.name; 
  const handleGoBackPress = () => {
    if (currentRoute !== 'Home') {
      navigation.goBack(); // Go back to the previous screen
    }
  };
  const handlePress = () => {
    if (currentRoute !== 'Favorites') {
      handler();
    }
  };

  return (
    <View style={styles.header}>
          {currentRoute !== 'Home' && (
      <TouchableOpacity style={styles.headerIcon} onPress={handleGoBackPress}>
        <Ionicons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>)}
      <View style={{ flex: 1 }} />
      {currentRoute !== 'Favorites' && (
        <TouchableOpacity style={styles.headerIcon} onPress={handlePress}>
          <Ionicons name="heart" size={40} color={!isFav ? "white" : "#1FF9F5"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcon: {
    // padding: 5,
  },
};

export default HeaderSection;
