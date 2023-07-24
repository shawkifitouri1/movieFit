import React from "react";
import { View, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
// import * as Progress from 'react-native-progress';

const { height, width } = Dimensions.get('window');

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'#1FF9F5'} />
      {/* OR */}
      {/* <Progress.CircleSnail thickness={12} size={160} color={theme.background} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default Loading;
