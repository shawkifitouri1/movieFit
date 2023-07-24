import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Text, ScrollView, Dimensions, ImageBackground, SafeAreaView, Animated, Linking, TouchableOpacity } from 'react-native';
import HeaderSection from '../components/headerSection';
import { getMovie, image500, fallbackMoviePoster } from '../backend/services/movie.service';
import ProductionCompanies from '../components/productionCompaniesSection';
import { AddToFavorites } from '../backend/redux/movies/movie.actions';

const { width, height } = Dimensions.get('window');

const MovieDetailsScreen = (props) => {
  const route = useRoute();
  const { movieId } = route.params;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    props.dispatch(getMovie(movieId));
  }, [movieId]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLinkPress = (link) => {
    link && Linking.openURL(link);
  };

  const addToFavorites = () => {
    props.dispatch(AddToFavorites(movieId));
  };

  const getVoteAverage = () => {
    const voteAverage = props.movie?.vote_average.toString();
    return voteAverage?.length > 3 ? voteAverage.slice(0, 3) : voteAverage;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
        <ImageBackground
          source={{ uri: image500(props.movie?.poster_path) || fallbackMoviePoster }}
          style={{ width, height: height * 0.55 }}
        >
          <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
            <HeaderSection isFav={props.favoriteList.includes(movieId)} handler={addToFavorites} />
          </Animated.View>

          <LinearGradient
            colors={['transparent', 'transparent', 'rgba(23, 23, 23, 0.5)', 'rgba(23, 23, 23, 0.7)', 'rgba(23, 23, 23, 0.8)', 'black']}
            style={{ width, height: height * 0.40, flex: 6, justifyContent: 'flex-end' }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <TouchableOpacity onPress={() => handleLinkPress(props.movie?.homepage)}>
              <Text style={styles.title}>
                {props.movie?.title}
              </Text>
            </TouchableOpacity>
            {props.movie?.id && (
              <Text style={styles.details}>
                {props.movie?.status} • {props.movie?.release_date?.split('-')[0] || 'N/A'} • {props.movie?.runtime} min
              </Text>
            )}
          </LinearGradient>
        </ImageBackground>

        <View style={styles.genreContainer}>
          {props.movie?.genres?.map((genre, index) => {
            let showDot = index + 1 !== props.movie.genres.length;
            return (
              <Text key={index} style={styles.genreText}>
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
        </View>

        <Text style={styles.description}>
          {props.movie?.overview}
        </Text>

        {props.movie?.id && <ProductionCompanies productionCompanies={props.movie.production_companies} />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  details: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  genreText: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    color: '#aaa',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    textAlign: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    movie: state.movie.movie,
    loading: state.movie.loading,
    favoriteList: state.movie.favoriteList,
  };
};

export default connect(mapStateToProps)(MovieDetailsScreen);
