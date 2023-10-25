import { useNavigation, useRoute } from "@react-navigation/native";
import { View,StyleSheet } from "react-native";
// import StudentHome from "../components/StudentHome";
import StaffHome from "../components/StaffHome";

const Home = () =>{
    const route = useRoute()
    const navigation = useNavigation()
    const {user,data1,data2}=route.params
    return(
        <View style={styles.container}>
            {user==="Student"?navigation.navigate('Tabs'):<StaffHome Staffid={data1} Password={data2}></StaffHome>}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})