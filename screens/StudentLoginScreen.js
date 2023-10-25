import { View, StyleSheet } from "react-native"
import StudentLogin from "../components/StudentLogin"

const StudentLoginScreen = () => {
  return (
        <View style={styles.container}>
            <StudentLogin></StudentLogin>
        </View> 
  )
}

export default StudentLoginScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})