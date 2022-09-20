import { StatusBar, Text } from "react-native"
import { Background } from './src/components/Background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter"
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { Home } from "./src/screens/Home";
import { Game } from "./src/screens/Game";
import './src/services/notificationConfigs.ts'
import * as Notification from 'expo-notifications'


import { getPushNotificatinToken } from './src/services/getPushNotificationToken'
import { useEffect, useRef } from "react";
import { Subscription } from "expo-modules-core";



export default function App() {
  const getNotificationListenner = useRef<Subscription>()
  const responseNotificatinoListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificatinToken()
  })

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })


  useEffect(() => {
    getNotificationListenner.current = Notification // escutando quando chega noti
      .addNotificationReceivedListener(notification => {
        console.log(notification)
      })

    responseNotificatinoListener.current = Notification // escutando quando responsder noti
      .addNotificationResponseReceivedListener(response => {
        console.log(response)
      })

    return () => {
      if (getNotificationListenner.current && responseNotificatinoListener.current) {
        Notification.removeNotificationSubscription(getNotificationListenner.current);
        Notification.removeNotificationSubscription(responseNotificatinoListener.current);
      }
    }

  }, [])
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );

}

