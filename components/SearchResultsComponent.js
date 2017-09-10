import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  Platform,
  ActivityIndicator 
} from 'react-native';
import {   
  List, 
  ListItem 
} from 'react-native-elements';
import { mockData } from '../assets/mockData/SearchMockData';


export default class SearchResultsComponent extends React.Component {
  
    constructor(props){
        // Always super constructor call comes first
        super(props);
        this.state = {
            loading : true,
            searchText : this.props.searchText,
            searchData : []
        } 
    }   

    static navigationOptions = ({navigation}) =>  ({
        headerTitle : "Search Results",    
        headerStyle : { 
            backgroundColor: '#E74C3C' 
        },
        headerTintColor : 'white'/* ,
        headerRight :   <TouchableHighlight onPress = {navigation.state.params.handleShare}
                            activeOpacity = {10}
                            underlayColor = {'#ff0000'}>
                            <View style={{ marginRight : 10 }} > 
                                <FontAwesome
                                    name ={'share-alt'}
                                    size ={25}
                                    color = {'white'}                                                    
                                />  
                            </View>
                        </TouchableHighlight> */                 
    });

  componentDidMount(){
      this.setState({
        searchData : mockData,
        loading : false
      });  
  }
  
  render() {    
    let downloadIcon = Platform.OS === 'ios' ? `ios-download` : 'md-download';    
    if(this.state.loading){
        return(
            <ActivityIndicator style={styles.activityIndicator} size = "large" />
        );            
    } else {
        return (  
            <View style={styles.container}>
              <ScrollView>
                  { this.state.searchData.length > 0 && 
                    <List style={{marginTop : 0}}>
                      {
                        this.state.searchData.map((l, i) => (
                          <ListItem
                            roundAvatar
                            avatar={l.imageUri}                  
                            key={i}
                            title={l.name}
                            avatarContainerStyle = {{backgroundColor : "white"}}
                            titleStyle = {{fontSize : 18}}
                            subtitle={
                              <View style={styles.subtitleView}>
                                <View>                          
                                  <Text style={{fontSize : 15}}> {l.teaser}</Text>
                                  <View style={{flexDirection: 'row', marginTop : 10}}>
                                    <Text style={styles.subtitleText}> Uploaded By : {l.uploadedBy} </Text>
                                    <Text style={styles.footerDateStyle}> Date : {l.date} </Text> 
                                </View>                            
                                </View>
                              </View>  
                            }
                            rightIcon = {{ name : downloadIcon , type: 'ionicon', style: styles.iconStyle}}
                            avatarStyle = {styles.avatarStyle}
                          />
                        ))
                      }
                    </List>
                  }            
              </ScrollView>    
            </View>  
          );
    }    
  }
}

const styles = StyleSheet.create({
  iconStyle : {
    marginRight: 10, 
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text : {
      paddingTop : 20
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  subtitleText : {
    color: 'grey',
    fontSize : 12
  },
  footerDateStyle : {
    color: 'grey',
    fontSize : 12,
    paddingLeft : 30
  },
  footer: {
    paddingLeft: 50,
    color: 'grey'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 },
 avatarStyle : {
    width: 35, 
    height: 35
 }
});       
