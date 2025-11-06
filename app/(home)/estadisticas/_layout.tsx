import { useUserInfo } from '@/lib/userContext'
import { Stack } from 'expo-router'
import React from 'react'

const ResumenesLayout=() => {
    const { profile }=useUserInfo()
    const isAdmin=profile?.role==='admin'

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!isAdmin}>
                <Stack />
                {/* <Stack.Screen name='by_chofer' />
                <Stack.Screen name='by_plataforma' />
                <Stack.Screen name='by_vehiculo' />
                <Stack.Screen name='resumenes' /> */}
            </Stack.Protected>
        </Stack>
    )
}

export default ResumenesLayout