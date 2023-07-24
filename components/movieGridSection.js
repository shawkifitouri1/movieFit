import React from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import MovieCard from "./movieCard";
import Loading from "./loading";

export default  MovieGridSection = (props) => {
 
 console.log('MovieGridSection ddd',props.searchResults);
 
 
    return (
    <View style={styles.resultsGrid}>
      {!props.loading ? (
        <FlatList
          data={props.searchResults.length>0 ? props.searchResults : props.movies}
          numColumns={3}
          renderItem={({ item }) => <MovieCard   isFav={props.isFav} movie={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.gridContainer}
        />
      ) : (
        <Loading/>
      )}

      {!props.isFav?<LinearGradient colors={["black", "rgba(23, 23, 23, 0.8)", "transparent"]} style={styles.gradient} />
    :<></>}</View>
  );
};

const styles = {
  resultsGrid: {
    position: "relative",
  },
  gridContainer: {
    paddingVertical: 16,
    alignItems: "flex-start",
    alignContent: "center",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "10%",
  },
};

// const mapStateToProps = (state) => {
//   return {
//     movies: state.movie.movies,
//     searchResults: state.movie.searchResults,
//     loading: state.movie.loading,
//   };
// };

// export default connect(mapStateToProps)(MovieGridSection);
