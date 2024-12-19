import EntryStack from '@navigation/navigators/EntryStack';
import store from '@store/index';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  let persistor = persistStore(store);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
        />
        <Provider {...{ store }}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastProvider>
              <EntryStack />
            </ToastProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
