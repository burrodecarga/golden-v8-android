import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { primary } from '../constants/Colors'
const ProfileIconButton=() => {



  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => router.push('/(home)/ajustes/profile')}>
      <Ionicons name="person-circle-outline" size={28} color={primary} />
    </TouchableOpacity>
  )
}
export default ProfileIconButton
