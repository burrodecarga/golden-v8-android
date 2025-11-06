import { Stack } from 'expo-router'
import React from 'react'

const InicioLayout=() => {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName='index' />
    )
}

export default InicioLayout