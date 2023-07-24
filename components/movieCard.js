import React, { useRef } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fallbackMoviePoster, image185 } from '../backend/services/movie.service';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { AddToFavorites } from '../backend/redux/movies/movie.actions';

const { width, height } = Dimensions.get('window');

const MovieCard = ({ movie, isFav, dispatch }) => {
  const wiggleAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const gradiantPallet = ['transparent', 'rgba(23, 23, 23, 0.69)', 'rgba(23, 23, 23, 1)'];
  const addToFav = () => {
    dispatch(AddToFavorites(movie.id));
  };

  const handleWiggleAnimation = () => {
    Animated.sequence([
      Animated.timing(wiggleAnimation, { toValue: -10, duration: 85, useNativeDriver: true }),
      Animated.timing(wiggleAnimation, { toValue: 10, duration: 85, useNativeDriver: true }),
      Animated.timing(wiggleAnimation, { toValue: 0, duration: 85, useNativeDriver: true }),
    ]).start(() => {
      navigation.navigate('MovieDetails', { movieId: movie.id });
    });
  };
  const getVoteAverage = () => {
    const voteAverage = movie.vote_average.toString();
    return voteAverage.length > 3 ? voteAverage.slice(0, 3) : voteAverage;
  };
  const getRefinedName = () => {
    return movie.title.length > 14 ? movie.title.slice(0, 14) + '...' : movie.title;
  };


  return (
    <TouchableWithoutFeedback onPress={handleWiggleAnimation}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateX: wiggleAnimation.interpolate({
                  inputRange: [-10, 10],
                  outputRange: [-2, 2],
                }),
              },
            ],
          },
        ]}
      >
        <ImageBackground
          flex={1}
          style={styles.image}
          source={{ uri: image185(movie.poster_path) || fallbackMoviePoster }}
          contentFit="contain"
          borderRadius={20}
        >
          <LinearGradient
            colors={gradiantPallet}
            style={styles.linearGradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <Text style={styles.text}>{getRefinedName()}</Text>
          </LinearGradient>
        </ImageBackground>
        {/* Floating View */}
        <View style={styles.floatingView}>
          {isFav ? (
            <TouchableOpacity onPress={addToFav}>
              <Ionicons name='trash' size={20} />
            </TouchableOpacity>
          ) : (
            <Text style={{ color: 'black', fontWeight: 'bold' }}>{getVoteAverage()}</Text>
          )}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: width * 0.27,
    height: height * 0.19,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '40%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 19,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingBottom: '10%',
    paddingLeft: '5%',
  },
  floatingView: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    backgroundColor: '#1FF9F5',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    searchResults: state.movie.searchResults,
    favoriteList: state.movie.favoriteList,
    loading: state.movie.loading,
  };
};

export default connect(mapStateToProps)(MovieCard);
