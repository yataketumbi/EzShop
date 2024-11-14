import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Merriweather": require("../assets/fonts/Merriweather-Bold.ttf"),
     "Merriweather-Regular": require("../assets/fonts/Merriweather-Regular.ttf"),
     "Merriweather-Light": require("../assets/fonts/Merriweather-Light.ttf"),
     "Merriweather-Bold": require("../assets/fonts/Merriweather-Bold.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    // <Slot></Slot>
    <Stack>

      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>

      <Stack.Screen name="(auth)" options={{
        headerShown:true
      }}/>

    </Stack>
  )
}

export default MainLayout