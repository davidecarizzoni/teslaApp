import React from 'react';
import {View, StyleSheet, Text, FlatList, Dimensions} from 'react-native';
import CarItem from './CarItem';

const CarsList = props => {
  const data = [
    {
      name: 'Model S',
      tagline: 'Starting at $69,420',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/ModelS.jpeg'),
    },
    {
      name: 'Model 3',
      tagline: 'Order Online for',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/Model3.jpeg'),
    },
    {
      name: 'Model X',
      tagline: 'Order Online for',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/ModelX.jpeg'),
    },
    {
      name: 'Model Y',
      tagline: 'Order Online for',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/ModelY.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        renderItem={({item}) => <CarItem car={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CarsList;
