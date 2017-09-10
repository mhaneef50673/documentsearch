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
import { mockData } from '../assets/mockData/SearchMockData';


export default class LinksScreen extends React.Component {
  
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

  searchDocument = (text) => {
    this.setState({searchData : mockData});
  }

  componentDidMount(){  
  }
  
  render() {    
    let downloadIcon = Platform.OS === 'ios' ? `ios-download` : 'md-download';
    return (  
      <View style={styles.container}>
        <View style={{ height : 100, backgroundColor: '#FF0000'}}>
            <Text style={{color : 'white', textAlign : 'center', fontSize : 20, fontWeight: 'bold',
              paddingTop : 15}}> 
              Document Search
            </Text>
            <SearchBar
              ref  = {search => this.search = search}                            
              placeholder='Search'
              containerStyle = {{backgroundColor: '#FF0000',borderColor: '#d6d7da', "borderTopWidth" : 0,
              "borderBottomWidth": 0}} 
              round
              //clearIcon = {this.state.searchClearIcon}              
              autoFocus={false}
              onChangeText={this._onChangeSearchText}
              value={this.state.searchText}
              blurOnSubmit = {true}
              onSubmitEditing = {this.searchDocument}
              inputStyle = {{backgroundColor : 'white', fontSize : 16, color : 'black' }}                           
            />          
        </View>
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
                      avatarStyle = {{width: 35, height: 35}}
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
  }
});

const searchClearIconObj = {  
  name: 'clear'
};        
