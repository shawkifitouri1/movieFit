import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { searchMovies, clearSearchResults } from "../backend/redux/movies/movie.actions";

const SearchInputSection = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.inputSearchZone}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        onChangeText={(text)=>props.handleSearch(text)}
        // value={searchQuery}
      />
      
    </View>
  );
};

const styles = {
  inputSearchZone: {
    // backgroundColor: "grey",
    borderRadius: 20,
    borderColor: "gray",
    opacity: 50,
  },
  input: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
    height: 60,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 16,
    zIndex: 1,
  },
};

export default SearchInputSection;
