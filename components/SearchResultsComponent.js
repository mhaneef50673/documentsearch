import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  Platform,
  ActivityIndicator,
  TouchableHighlight, 
  Modal 
} from 'react-native';
import {   
  List, 
  ListItem 
} from 'react-native-elements';
import { mockData } from '../assets/mockData/SearchMockData';
import  Ionicons  from 'react-native-vector-icons/Ionicons';


export default class SearchResultsComponent extends React.Component {
  
    constructor(props){
        // Always super constructor call comes first
        super(props);
        this.state = {
            loading : true,
            searchText : this.props.searchText,
            searchData : [],
            modalVisible: false
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

    setModalVisible(visible) {
        this.setState(
            {
                modalVisible: visible
            }
        );
    }

    buttonPress() {        
        this.setModalVisible(true);
    }

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
                    <View style={{flex:1}}>
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
                    <View style={styles.bottomView}>
                        <TouchableHighlight underlayColor = "white" onPress= {() => this.buttonPress('sort')}>
                            <View>
                            <Ionicons
                            name={'md-arrow-round-down'}
                                size={20}            
                                color={'red'}
                            >
                            <Text style={{color : 'black', fontSize : 18}}> Sort </Text>
                            </Ionicons>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor = "white" onPress= {() => this.buttonPress('filter')}>
                            <View>
                            <Ionicons
                                name={'md-options'}
                                size={20}            
                                color={'red'}
                            >
                                <Text style={{color : 'black', fontSize : 18}}> Filter </Text>
                            </Ionicons>
                            </View>
                        </TouchableHighlight>          
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}
                    >
                        <View style={{paddingTop:22}}>
                            <View style={{height : 30, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                                <View style={{paddingLeft: 10, paddingRight: 20}}>
                                    <TouchableHighlight onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                        <Ionicons
                                        name={'md-close'}
                                        size={24}  
                                        color={'grey'}
                                        />
                                    </TouchableHighlight>  
                                </View>            
                                <View style={{marginTop:3}}>
                                    <Text style={{color: "grey", fontWeight : 'bold'}}> FILTER BY </Text>
                                </View>
                                <View style={{flex:1, flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                                    <View style={{marginTop:3}}>
                                        <Text style={{color: "grey", fontWeight : 'bold'}}> CLEAR </Text>
                                    </View>  
                                    <View style={{backgroundColor: '#E74C3C',padding:2,marginRight:6,marginBottom:6}}>
                                        <TouchableHighlight> 
                                            <Text style={{color: "white", fontWeight : 'bold'}}> APPLY </Text>
                                        </TouchableHighlight>              
                                    </View>
                                </View>            
                            </View>
                            <View>

                            </View>
                        </View>
                    </Modal>                                            
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
 },
 bottomView : {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height : 50
  },
});       
