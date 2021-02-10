import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Hotels from '../../screens/Hotels';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    uri: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

// const Item = ({ title }) => (
//   <View >
//     <Text >{title}</Text>
//   </View>
// );

const Practice = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        {/* <FlatList
        data={DATA}
        renderItem={
            ({ item }) => {
                return<Hotels
                tit= {item.title}
                iD = {item.id}
                img= {item.uri}
                />
            }
//             (<View style={{flexDirection: 'row'}}>
// <Text>{item.title}</Text>   
// <Image source={{uri: item.uri}} style={{width: 100, height:100}}/>   
//             </View>
                     
//               ) 
        }
        keyExtractor={item => item.id}
      /> */}
        </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Practice;