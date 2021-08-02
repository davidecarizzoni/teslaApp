import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <Image
        style={styles.drawer}
        source={require('../assets/images/menu.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  drawer: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default Header;
