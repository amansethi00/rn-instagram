import {View, Text} from 'react-native';
import React from 'react';

const BottomModal = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>BottomModal</Text>
    </View>
  );
};

const styles = {
  sectionContainer: {
    backgroundColor: 'red',
    marginTop: 32,
  },
};

export default BottomModal;
