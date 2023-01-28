import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './android/app/src/screens/HomePage';
import BottomModal from './android/app/src/screens/BottomModal';
import Details from './android/app/src/screens/Details';

export const Stack = createNativeStackNavigator<{
  Home: undefined;
  BottomModal: undefined;
  Details: undefined;
}>();

export type ScreenNames = ['Home', 'BottomModal', 'Details'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
          }}>
          <Stack.Screen name="BottomModal" component={BottomModal} />
        </Stack.Group>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
