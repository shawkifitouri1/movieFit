import React, { useEffect, useRef } from "react";
import { StyleSheet, ImageBackground, SafeAreaView,Animated,StatusBar } from "react-native";
import { connect } from 'react-redux';
import { getMovies } from "../backend/services/movie.service";
import { searchMovies,clearSearchResults } from "../backend/redux/movies/movie.actions";
import HeaderSection from "../components/headerSection";
import SearchInputSection from "../components/searchInputSection";
import MovieGridSection from "../components/movieGridSection";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
 const navigation=useNavigation();
  const handleSearch = (query) => {
    if (query.trim() === "") {
      props.dispatch(clearSearchResults()); // Clear search results if the query is empty
    } else {
      props.dispatch(searchMovies(query)); // Dispatch search action with the search query
    }
  };
  
  
  
  useEffect(() => {
    props.dispatch(getMovies());
  }, []);
  


  const handleNav = () => {
    console.log('home');
    navigation.navigate('Favorites');
   };
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar hidden />

      <ImageBackground
        style={styles.image}
        source={require("../assets/backgroundupdown.png")}
        contentFit="cover"
        transition={1000}
      >
        <Animated.View style={[styles.header, { opacity: fadeAnim,}]}>
          <HeaderSection handler={handleNav} />
        </Animated.View>


        <Animated.View style={[ { opacity: fadeAnim,flex:1.5,alignContent:'center',justifyContent:'space-around' }]}>
          <SearchInputSection handleSearch={handleSearch} />
        </Animated.View>
        <Animated.View style={[{ flex: 6 }, { opacity: fadeAnim }]}>

        <MovieGridSection movies={props.movies} searchResults={props.searchResults} loading={props.loading}/>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    searchResults: state.movie.searchResults,
    // searchResults
    loading: state.movie.loading
  }
};

export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  header: {
    // flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 16,
    // backgroundColor: 'blue',
  },
  

 
});

