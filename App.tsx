import 'react-native-get-random-values';
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/Home/HomeScreen';
import { StatusBar, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TimerProvider } from '@/contexts/Timer.context';
import { Providers } from '@/contexts';

export type AppRootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();
SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Orbitron: require('./assets/fonts/Orbitron/Orbitron.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <StatusBar barStyle="dark-content" />
      <Providers>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Providers>
    </View>
  );
};

export default App;
