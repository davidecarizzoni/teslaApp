import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import StyledButton from './StyledButton';

const CarItem = props => {
  const {name, tagline, taglineCTA, image} = props.car;
  console.log({name, tagline, taglineCTA, image});
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type={'secondary'}
          text={'custom order'}
          onPress={() => console.log('Custom order pressed')}
        />
        <StyledButton
          type={'primary'}
          text={'Existing inventory'}
          onPress={() => console.log('Inventory pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height, //IMPORTANT
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
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
    color: '#535353',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
});

export default CarItem;
