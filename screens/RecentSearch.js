import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text 
} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {     
    header : null  
  };

  render() { 
    return (
      <View style={styles.container}>            
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}> 
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
  viewStyle: { 
    height:50, 
    backgroundColor: '#E74C3C'
  },
  textStyle: {
    color : 'white', 
    textAlign : 'center', 
    fontSize : 20, 
    fontWeight: 'bold',
    paddingTop : 15
  },
  text : {
      paddingTop : 20
  }
});
