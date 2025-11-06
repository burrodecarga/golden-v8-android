import ThemedPressable from '@/components/ThemedPressable'
import { ThemedText } from '@/components/ThemedText'
import { usePermissionsStore } from '@/store/usePermissionsStore'
import { View } from 'react-native'

const PermissionsScreen=() => {
  const { locationStatus, requestLocationPermission }=usePermissionsStore()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  )
}
export default PermissionsScreen
