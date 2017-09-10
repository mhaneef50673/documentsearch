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
  SearchBar
} from 'react-native-elements';

export default class SearchComponent extends React.Component {
  
  constructor(props){
    // Always super constructor call comes first
    super(props);    
    this.state = {
      searchClearIcon : false,
      searchText : '',
      searchData : []
    } 
  }   

  static navigationOptions = {
    header : null  
  };

  _onChangeSearchText = (text) => {
    if (text) {
      this.setState({searchClearIcon : {name : 'clear'}, searchText : text});
    } else {
      this.setState({ searchClearIcon : false, searchText : ''});
    }  
  }

  searchDocument = (navigate) => {    
    if(this.state.searchText){
        navigate('SearchResults',{searchText : this.state.text});
    } else
        alert("Please enter a valid search text");
  }

  componentDidMount(){  
  }
  
  render() {        
    const { navigate } = this.props.navigate;
    return (  
      <View style={styles.container}>
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> 
              Document Search
            </Text>
            <SearchBar
              ref  = {search => this.search = search}                            
              placeholder='Search'
              containerStyle = {styles.containerStyle} 
              round
              //clearIcon = {this.state.searchClearIcon}              
              autoFocus={false}
              onChangeText={this._onChangeSearchText}
              value={this.state.searchText}
              blurOnSubmit = {true}
              onSubmitEditing = {() => this.searchDocument(navigate)}
              inputStyle = {styles.inputStyle}                           
            />          
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
  viewStyle : { 
    height : 100, 
    backgroundColor: '#E74C3C'
  },
  textStyle : {
    color : 'white', 
    textAlign : 'center', 
    fontSize : 20, 
    fontWeight: 'bold',
    paddingTop : 15
  },
  containerStyle : {
    backgroundColor: '#E74C3C',
    borderColor: '#d6d7da',
    borderTopWidth : 0,
    borderBottomWidth: 0
  },
  inputStyle : {
    backgroundColor : 'white', 
    fontSize : 16, 
    color : 'black' 
  }
});

const searchClearIconObj = {  
  name: 'clear'
};        
