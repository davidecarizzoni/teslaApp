import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

const CarItem = props => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../assets/images/ModelS.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.titles}>
        <Text style={styles.title}> Model s</Text>
        <Text style={styles.subtitle}> Starting at 69.700$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', //cover the all space
    position: 'absolute',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#787878',
  },
});

export default CarItem;
