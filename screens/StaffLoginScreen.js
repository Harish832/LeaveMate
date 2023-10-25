import { View, StyleSheet, ImageBackground } from "react-native"
import StaffLogin from "../components/StaffLogin"

const StaffLoginScreen = () => {
  return (
        <View style={styles.container}>
                <StaffLogin />
        </View> 
  )
}

export default StaffLoginScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        opacity:0.3
    }
})