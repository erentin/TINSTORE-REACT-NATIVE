import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, TextInput } from "react-native";

import StoreList from "./components/StoreList/StoreList"
import storeData from "./store_data.json";

function App () {

  return(
    <SafeAreaView>
      <View>
        <Text style={styles.title}>TIN<Text style={styles.store}>STORE</Text></Text>
        <TextInput
          style={styles.input}
          placeholder={"Ara..."}
        />
        <FlatList
          columnWrapperStyle={{
            justifyContent: "space-around"
          }}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          numColumns={2}
          style={styles.container}
          data={storeData}
          renderItem={({item}) => <StoreList store={item}/>}
          
          
        />
        
      </View>
    </SafeAreaView>

  )

}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor:"white",
    
  },

  title:{
    fontSize:36,
    color:"black",
    fontWeight:"bold",
    margin:20,
  },

  store:{
    color:"red",
    fontWeight:"normal",
    fontStyle:"italic",
  },

  input:{
    backgroundColor:"#eceff1",
    borderRadius:20,
    marginHorizontal:10,
    marginBottom:10,
    paddingLeft:20,
  }
})

export default App;