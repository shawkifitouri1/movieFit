import React, { useEffect, useState } from "react";
import HomeScreen from "./screens/Home";
import { movieService } from "./backend/services/movie.service";
import { Provider } from 'react-redux';
import store from './backend/redux/store'
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import { SafeAreaView,StatusBar } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import favorites from "./screens/favorites";
import SplashScreen from "./screens/splashScreen";

const App = () => {


  useEffect(() => {
    // fetchMovies();
  }, []);

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
       {/* <SafeAreaProvider> */}
      <NavigationContainer>
      <StatusBar hidden />

        <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
            {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Favorites" component={favorites} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

export default App;
