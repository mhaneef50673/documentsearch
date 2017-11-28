import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  Platform,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import {   
  List, 
  ListItem 
} from 'react-native-elements';
import { mockData } from '../assets/mockData/SearchMockData';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import ModalPicker from 'react-native-modal-picker'

import ModalComponent from './ModalComponent';
import CustomSort from '../services/CustomSort';


export default class SearchResultsComponent extends React.Component {
  
    constructor(props){
        // Always super constructor call comes first
        super(props);        
        this.state = {
            loading : true,
            searchText : this.props.searchText,
            searchData : [],
            backUpSearchData : [],
            modalVisible: false,
            filterData : [],
        } 
    }   

    static navigationOptions = ({navigation}) =>  ({
        headerTitle : "Search Results",    
        headerStyle : { 
            backgroundColor: '#E74C3C' 
        },
        headerTintColor : 'white'               
    });

    setModalVisible() {        
        let visible = !(this.state.modalVisible);       
        this.setState({
                modalVisible: visible
        });        
    }

    applyFilter(filterData){
        this.setModalVisible();        
        let filteredSearchData = [];
        filterData.forEach(function(filter) {
            if(filter.checked){
                this.state.backUpSearchData.forEach(function(searchData) {
                    if(searchData.type == filter.docType)
                        filteredSearchData.push(searchData);
                }, this);
            } 
        }, this);
        
        // Then surely none of the filters have been applied.
        if(filteredSearchData.length == 0)
            filteredSearchData = [...this.state.backUpSearchData];

        this.setState({
            searchData : filteredSearchData
        })

    }

    buttonPress() {               
        this.setModalVisible();
    }

    sortSearchData(sortBy){
        let sortedSearchData = CustomSort.sort([...this.state.backUpSearchData],sortBy.field, sortBy.fieldType);
        this.setState({
            searchData : sortedSearchData
        })
    }

    containsObject(docType,list){
        let elementIndex = -1;

        if(list.length == 0)
            return elementIndex;

        list.forEach(function(element,index) {
            if (element.docType === docType) {
                elementIndex = index;
                return true;
            }
        }, this);        
    
        return elementIndex;
    }

    componentDidMount(){
        let filterDataArr = [];
        mockData.forEach(function(element) {
            let index = this.containsObject(element.type,filterDataArr);
            if(index != -1){
                filterDataArr[index].docCount += 1; 
            } else {
                let obj = {};
                obj.docType = element.type;
                obj.docCount = 1;
                obj.checked = false;
                filterDataArr.push(obj);
            }
        }, this);
        this.setState({
            searchData : mockData,
            backUpSearchData : mockData,
            filterData : filterDataArr,
            loading : false
        });  
    }
    
    render() {    
        let downloadIcon = Platform.OS === 'ios' ? `ios-download` : 'md-download';  
        let setModalVisible  =   this.setModalVisible;
        let index = 0;
        const sortCriteria = [
            { key: index++, section: true, label: 'Sort By' },
            { key: index++, label: 'Document Date', field :'date', fieldType: 'date' },
            { key: index++, label: 'Document Name', field :'name', fieldType: 'string' },
            { key: index++, label: 'Document Type', field :'type', fieldType: 'string' },
            { key: index++, label: 'Document Uploaded By',field :'uploadedBy', fieldType: 'string' }
        ];

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
                                <View>
                                        <TouchableHighlight underlayColor = "white">
                                            <View>
                                                <ModalPicker
                                                    data={sortCriteria}                                        
                                                    onChange={(option)=>{ this.sortSearchData(option) }} 
                                                    cancelText = {"Cancel"}
                                                >
                                                    <View>
                                                        <Ionicons
                                                            name={'md-arrow-round-down'}
                                                            size={20}            
                                                            color={'red'}
                                                        >
                                                            <Text style={{color : 'black', fontSize : 18}}> Sort </Text>
                                                        </Ionicons>                                                   
                                                    </View>
                                                </ModalPicker>
                                            </View>
                                        </TouchableHighlight>                                    
                                </View>                        

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
                    {(this.state.modalVisible) ? 
                        <ModalComponent modalVisible = {this.state.modalVisible} modalData = {this.state.filterData}
                        setModalVisible = {setModalVisible.bind(this)} 
                        applyFilter = {this.applyFilter.bind(this)} /> : null}                                                                                 
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
