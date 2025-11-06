import { useUserInfo } from '@/lib/userContext'
import { Stack } from 'expo-router'
import React from 'react'

const ChatLayout=() => {
    const { profile }=useUserInfo()

    return (
        <Stack initialRouteName='index' screenOptions={{ headerShown: true, title: profile?.username! }} />
    )
}

export default ChatLayout