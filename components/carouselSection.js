import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./carouselItem";

const CarouselSection = () => {
  const carouselRef = React.useRef(null);

  const sliderWidth = Dimensions.get("window").width; // Replace with your desired slider width
  const itemWidth = Dimensions.get("window").width / 2; // Replace with your desired item width
  const slideHeight = 1000;

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.upcomingMoviesContainer}>
        <Text style={styles.upcomingMoviesText}>Upcoming movies</Text>
      </View>
      <View style={styles.carouselContent}>
        <Carousel
          ref={carouselRef}
          data={[
            { title: "title", rate: "4.5" },
            { title: "title", rate: "4.5" },
            { title: "title", rate: "4.5" },
            { title: "title", rate: "4.5" },
            { title: "title", rate: "4.5" },
          ]}
          renderItem={MovieCard}
          sliderWidth={sliderWidth}
          slideHeight={slideHeight}
          itemWidth={itemWidth}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 2,
    alignItems: "center",
    paddingLeft: "2%",
    paddingTop: "10%",
    justifyContent: "center",
  },
  upcomingMoviesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  upcomingMoviesText: {
    color: "white",
    textAlign: "left",
    fontSize: 25,
    fontWeight: "800",
  },
  carouselContent: {
    flex: 4,
  },
});

export default CarouselSection;
