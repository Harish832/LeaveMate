import { useNavigation } from "@react-navigation/native"
import { View,Text,Image, StyleSheet, Pressable, ImageBackground } from "react-native"

const Index = () => {
  const navigator= useNavigation();
  return (
        <View style={styles.container}>
            <ImageBackground style={styles.container} resizeMode="cover" source={require('../assets/images/background.jpg')}>
              <View style={styles.logo_container}>
                <Image source={require('../assets/images/logo.png')}></Image>
                <Text style={styles.title}>Leave Mate</Text>
              </View>
              <View style={styles.nav_container}>
                <Text style={styles.description}>"Say hello to streamlined, hassle-free leave requests"</Text>
                <Pressable style={styles.btn} android_ripple={{}} onPress={()=>{navigator.navigate('StaffLogin')}}>
                  <Text style={styles.btn_text}>Lets Get Started</Text>
                </Pressable>
              </View>
            </ImageBackground>
        </View> 
  )
}

export default Index

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    logo_container:{
      flex:1,
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'center',
      marginVertical:30
    },
    nav_container:{
      flex:1,
      justifyContent:'flex-end',
      flexDirection:'column',
      alignItems:'center',
      marginBottom:100
    },
    btn:{
      borderRadius:10,
      backgroundColor:'black',
    },
    btn_text:{
      color:"white",
      fontFamily:'georama',
      padding:15,
      fontSize:15
    },
    title:{
      fontSize:50,
      fontFamily:'georama'
    },
    description:{
      display:'flex',
      textAlign:'center',
      fontFamily:'istokweb-itallic',
      marginBottom:20,
      fontSize:15
    }
})