import React from "react";
import {View,Text,Image} from "react-native";

import styles from "./StoreList.style"



const StoreList = ({store}) => {


    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: store.imgURL}} />
            <Text style={styles.title}>{store.title}</Text>
            <Text style={styles.price}>{store.price}</Text>
            <View style={styles.container}>
                {store.inStock == false ? <Text style={styles.error}>Stokta Yok!</Text>: null }
            </View>
        </View>
    )
}

export default StoreList;