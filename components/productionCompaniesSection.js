import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { image185, fallbackPersonImage } from '../backend/services/movie.service';

const ProductionCompanies = ({ productionCompanies}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Production companies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {productionCompanies &&
          productionCompanies.map((company, index) => (
         
            <TouchableOpacity
              key={index}
              // onPress={() => navigation.navigate('Person', company)}
              style={styles.castItem}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: image185(company?.logo_path) ||fallbackPersonImage }}
                  resizeMode='contain'
                />
              </View>

              <Text style={styles.characterName}>
                {company?.name.length > 10 ? company.name.slice(0, 10) + '...' : company?.name}
              </Text>

            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 6,
    justifyContent:'center',
    alignItems:'center'
  },
  heading: {
    color: 'white',
  
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 5,
  
  },
  scrollViewContent: {
    
    paddingHorizontal: 15,
  },
  castItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  imageContainer: {
    overflow: 'hidden',
    // borderRadius: 20,
    // height: 80,
    // width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  image: {
    borderRadius: 12,
    height: 80,
    width: 80,
  },
  characterName: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  originalName: {
    color: '#ccc',
    fontSize: 12,
  },
};

export default ProductionCompanies;
