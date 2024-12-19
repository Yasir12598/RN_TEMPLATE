import colors from '@libs/styles/colors';
import { CustomTheme } from '@libs/styles/types';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ForceUpdateNavigator from './ForceUpdateNavigator';
import { ParamsList } from './types';
import Login from '@modules/auth/screens/Login';

const Stack = createStackNavigator<ParamsList>();

const Mytheme: CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, // Include default colors
    ...colors,
  },
};

function EntryStack() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
      }}
    >
      <NavigationContainer theme={Mytheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={'Login'}
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default EntryStack;
