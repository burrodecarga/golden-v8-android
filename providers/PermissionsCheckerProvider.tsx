import { router } from 'expo-router'
import { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'


import { PermissionStatus } from '@/utils/location'
import { usePermissionsStore } from '../store/usePermissionsStore'

const PermissionsCheckerProvider=({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission }=usePermissionsStore()

  useEffect(() => {
    if (locationStatus===PermissionStatus.GRANTED) {
      router.replace('/(home)/inicio')
    } else if (locationStatus!==PermissionStatus.CHECKING) {
      router.replace('/(home)/mapas/permissions')
    }
  }, [locationStatus])

  useEffect(() => {
    checkLocationPermission()
  }, [])

  useEffect(() => {
    const subscription=AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState==='active') {
        checkLocationPermission()
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return <>{children}</>
}
export default PermissionsCheckerProvider
