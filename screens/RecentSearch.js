import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {     
    header : null  
  };

  render() {
    return (
      <View style={styles.container}>            
        <View style={{ height : 50, backgroundColor: '#FF0000'}}>
          <Text style={{color : 'white', textAlign : 'center', fontSize : 20, fontWeight: 'bold',
            paddingTop : 15}}> 
            Document Search
          </Text>          
        </View>        
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text : {
      paddingTop : 20
  }
});
