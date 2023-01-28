import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../../App';
import Stories from '../components/stories/Stories';

const HomePage = () => {
  const navigation = useNavigation<StackNavigation>();
  const openBottomModal = () => {
    navigation.navigate('BottomModal');
  };
  const navigateToDetailsScreen = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Stories />
        <ScrollView
          style={styles.sectionContainer}
          contentInsetAdjustmentBehavior="automatic">
          <Text>Hello World</Text>
          <Button title="Open Bottom Modal" onPress={openBottomModal} />
          <Button
            title="Navigate to Detials screen"
            onPress={navigateToDetailsScreen}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 2,
    paddingHorizontal: 4,
  },
});

export default HomePage;
