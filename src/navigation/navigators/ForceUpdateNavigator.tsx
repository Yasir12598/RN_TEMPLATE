import ForceUpdate from '@modules/shared/screens/ForceUpdate';
import { navigationRoutes } from '@navigation/routes/navigationRoutes';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function ForceUpdateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={navigationRoutes.ForceUpdate}
        component={ForceUpdate}
      />
    </Stack.Navigator>
  );
}

export default ForceUpdateNavigator;
