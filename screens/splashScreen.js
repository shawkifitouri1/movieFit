import React, { useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigation.replace("Home"); 
    }, 2000);

    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splashscreen.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  image: {
    width: Dimensions.get("window").width,
    height:  Dimensions.get("window").height,
    resizeMode:'stretch',
  },
});

export default SplashScreen;