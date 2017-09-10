import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  Platform 
} from 'react-native';
import { 
  SearchBar, 
  List, 
  ListItem 
} from 'react-native-elements';
import SearchResultsComponent from '../components/SearchResultsComponent';


export default class SearchResults extends React.Component {
  
    constructor(props){
        // Always super constructor call comes first
        super(props);
        this.state = {
            searchText : this.props.navigation.state.params.searchText
        }
    }   

    static navigationOptions = ({navigation}) =>  ({
        headerTitle : "Search Results",    
        headerStyle : { 
            backgroundColor: '#E74C3C' 
        },
        headerTintColor : 'white'
        // TODO : include search icon over here
        /* ,
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
  
  render() {    
        return (
            <SearchResultsComponent searchText = {this.state.searchText}/>     
        );        
    }    
}
