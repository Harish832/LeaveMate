// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import Index from './screens/Index';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StudentLoginScreen from './screens/StudentLoginScreen'
import StaffLoginScreen from './screens/StaffLoginScreen';
import Home from './screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded]=useFonts({
    'georama':require('./assets/fonts/Georama-Regular.ttf'),
    'istokweb-itallic':require('./assets/fonts/IstokWeb-Italic.ttf')
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  const Stack=createNativeStackNavigator();
    
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container} onLayout={onLayoutRootView}>
            {/* <Index></Index> */}
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_left'}}>
              <Stack.Screen name='Index' component={Index}></Stack.Screen>
              <Stack.Screen name='StudentLogin' component={StudentLoginScreen}></Stack.Screen>
              <Stack.Screen name='StaffLogin' component={StaffLoginScreen}></Stack.Screen>
              <Stack.Screen name='Home' component={Home}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
