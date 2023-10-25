import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Create() {
    return (
      <View style={styles.container}>
        <Text>Create</Text>
      </View>
    );
  }
  
  function Status() {
    return (
      <View style={styles.container}>
        <Text>Status!</Text>
      </View>
    );
  }
  
  function History() {
    return (
      <View style={styles.container}>
        <Text>History!</Text>
      </View>
    );
  }

const StudentHome=({Rollnumber,Password})=>{
    const Tab= createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName="Create"
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                headerShown:false
            }}
        >
            <Tab.Screen
                name="Status"
                component={Status}
                options={{
                tabBarLabel: 'Status',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="list-status" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                tabBarLabel: 'Create',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="layers-plus" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                tabBarLabel: 'History',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default StudentHome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})