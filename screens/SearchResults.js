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
    });
  
  render() {    
        return (
            <SearchResultsComponent searchText = {this.state.searchText}/>     
        );        
    }    
}
