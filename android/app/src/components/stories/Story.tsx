import {View, Text, Image} from 'react-native';
import React from 'react';

const Story = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </View>
      <Text>Hello Story</Text>
    </View>
  );
};

const styles = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 50,
  },
  imageContainer: {
    width: 62,
    overflow: 'hidden',
  },
};

export default Story;
