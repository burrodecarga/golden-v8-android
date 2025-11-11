import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'


import Loading from '@/components/Loading'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { AuthProvider, useUserInfo } from '@/lib/userContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const unstable_settings={
  anchor: '(tabs)',
}

export default function RootLayout() {
  const colorScheme=useColorScheme()

  const SessionLayout=() => {

    const { session, loading, profile }=useUserInfo()

    let isAuthenticated=false
    if (loading) {
      return <Loading />
    }


    if (session) {
      //console.log('AUTENTICADO', profile)
      isAuthenticated=true
    }
    return (
      <ThemeProvider value={colorScheme==='dark'? DarkTheme:DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!isAuthenticated}>
            <Stack.Screen name='(auth)' options={{ animation: 'none' }} />
          </Stack.Protected>

          <Stack.Protected guard={!!isAuthenticated}>
            <Stack.Screen name='(home)' options={{ animation: 'fade' }} />
          </Stack.Protected>
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

    )
  }

  const queryClient=new QueryClient()
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SessionLayout />
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
