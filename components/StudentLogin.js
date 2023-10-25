import { View, TextInput, Text, StyleSheet, Image, Pressable } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const StudentLogin = () => {
    const [bool,setBool]=useState(true);
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image source={require('../assets/images/logo.png')}></Image>
            <View style={styles.back_btn}>
                <Text style={styles.back} onPress={()=>{navigation.navigate('Index')}}>Back</Text>
            </View>
        </View>
        <View style={styles.signin_container}>
            <Text style={styles.signin}>Sign In</Text>
            <Text style={styles.comment}>Please sign in to continue</Text>
            <View style={styles.input_container}>
                <TextInput onPressIn={()=>{setBool(false)}} onSubmitEditing={()=>{setBool(true)}} style={styles.input} placeholder="Roll number"></TextInput>
                <TextInput onPressIn={()=>{setBool(false)}} onSubmitEditing={()=>{setBool(true)}} style={styles.input} placeholder="Password"></TextInput>
            </View>
            <View style={styles.button_container}>
                <Pressable style={styles.button} android_ripple={{color:'#121212'}}>
                    <Text style={styles.button_text}>Sign In</Text>
                </Pressable>
            </View>
            <View style={bool?styles.nav_container:[styles.nav_container,styles.visibility]}>
                <Text style={styles.nav_text}>Are you a staff?? </Text>
                <Text style={[styles.nav_text,styles.nav_link]} onPress={()=>{navigation.navigate('StaffLogin')}}> Click here</Text>
            </View>
        </View>
        <View style={bool?styles.motto_container:[styles.motto_container,styles.visibility]}>
            <Text style={styles.motto_line1}>“Leave the paperwork behind”</Text>
            <Text style={styles.motto_line2}>-Let learning take the lead!!!</Text>
        </View>
    </View>
  )
}

export default StudentLogin

const height= Dimensions.get("screen").height;

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    image_container:{
        flexDirection:'row-reverse',
        padding:45,
        flex:1,
    },
    signin_container:{
        paddingHorizontal:35,
        flex:5,
        justifyContent:"flex-start",
        // backgroundColor:'black'
    },
    signin:{
        fontSize:50,
        fontWeight:'500',
        fontFamily:'georama'
    },
    comment:{
        fontSize:20,
        fontFamily:'georama',
        opacity:0.25
    },
    input_container:{
        marginTop:height>860?20:5,
        marginBottom:height>860?20:8
    },
    input:{
        borderWidth:1,
        borderRadius:7,
        borderColor:'grey',
        padding:12,
        fontSize:18,
        fontWeight:'500',
        fontFamily:'georama',
        marginVertical:20    
    },
    button_container:{
        alignItems:'center',
        marginBottom:30
    },
    button:{
        backgroundColor:'black',
        width:100 ,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10 
    },
    button_text:{
        color:'white',
        padding:10,
        fontSize:18,
        fontFamily:'georama'
    },
    nav_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    nav_text:{
        fontSize:20,
        fontFamily:'georama'
    },
    nav_link:{
        color:'blue'
    },
    motto_container:{
        alignItems:'center',
        flex:1,
        opacity:0.5,
    },
    motto_line1:{
        fontFamily:'istokweb-itallic',
        paddingRight:50
    },
    motto_line2:{
        fontFamily:'istokweb-itallic',
        paddingLeft:50
    },
    visibility:{
        opacity:0,
    }
})