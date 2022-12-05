import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: Dimensions.get("window").width/2.2,
        borderRadius:10,
        backgroundColor: "#eceff1",
        padding:10,

    },
    title: {
        fontSize:16,
        color:"black",
        marginBottom:10,
    },
    image:{
        borderRadius:10,
        marginBottom:10,
        width: Dimensions.get("window").width/2.5,
        height:Dimensions.get("window").width/2.5,
        resizeMode:"contain",
    },
    error:{
        color:"red",
        fontWeight:"700",
    },
    price:{
        fontSize:18,
    }

})