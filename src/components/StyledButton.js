import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';

const StyledButton = props => {
  // const type = props.type;
  // const onPress = props.onPress;

  const {type, text, onPress} = props;
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text
          style={[
            styles.text,
            {color: props.type === 'primary' ? '#FFFFFF' : '#171A20'},
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //related to the parent dimension
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 25,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default StyledButton;
