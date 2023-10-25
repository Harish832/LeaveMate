import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet } from "react-native";

const StaffHome=({Staffid,Password})=>{
    const Tab= createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen></Tab.Screen>
        </Tab.Navigator>
    )
}

export default StaffHome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})