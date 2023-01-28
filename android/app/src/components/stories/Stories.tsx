import React from 'react';
import Story from './Story';
import {
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import stories from './data.json';

const Stories = () => {
  console.log('====================================');
  console.log('stories', stories);
  console.log('====================================');

  return (
    <FlatList
      data={stories.data}
      renderItem={story => <Story />}
      keyExtractor={item => item.id.toString()}
      horizontal
    />
  );
};

const styles = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    overflow: 'scroll',
    width: 50,
  },
};
export default Stories;
