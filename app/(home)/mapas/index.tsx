import { Text, View } from 'react-native'


const MapScreen=() => {
  // const { lastKnownLocation, getLocation }=useLocationStore()

  // useEffect(() => {
  //   if (lastKnownLocation===null) {
  //     getLocation()
  //   }
  // }, [])

  // if (lastKnownLocation===null) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator />
  //     </View>
  //   )
  // }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      {/* <CustomMap initialLocation={lastKnownLocation} /> */}
      <Text>MAPA</Text>
    </View>
  )
}
export default MapScreen
