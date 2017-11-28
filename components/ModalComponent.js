import React from 'react';
import {     
    StyleSheet, 
    View, 
    Text,            
    TouchableHighlight, 
    Modal,
    ScrollView 
  } from 'react-native';
import {       
    Divider,
    CheckBox  
} from 'react-native-elements';  
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import CheckBoxComponent from './CheckBoxComponent';

const checkBoxesMock = [
    { docType : "DOC" , docCount : 10 , checked : false },
    { docType : "CSV", docCount : 2 , checked : false },
    { docType : "IMG", docCount : 5 , checked : false },
    { docType : "PDF", docCount : 1 , checked : false },
    { docType : "PPT", docCount : 2 , checked : false },
    { docType : "TXT", docCount : 4 , checked : false },
    { docType : "XLSX", docCount : 3 , checked : false }
];

export default class ModalComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            filters : this.props.modalData
        }
    }

    componentWillMount = () => {        
    }

    toggleCheckbox = label => {                                
        this.setState({filters: this.state.filters.map(
            (filter)=> filter.docType == label ? Object.assign(filter, filter, {checked: !(filter.checked)}) : filter 
        )});                
    }

    resetSelection(){               
        let filtersObj = this.state.filters;        

        this.state.filters.map(
            (filter) => Object.assign(filter, filter, {checked: false})
        );

        this.setState({
            filters : this.state.filters
        });
    }

    closeModal(){
        this.resetSelection();
        this.props.setModalVisible();  
    }

    applySelection(){        
        this.props.applyFilter(this.state.filters);
    }

    render(){                        
        const {modalVisible} = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    this.closeModal()
                }}
            >
                <View style={{paddingTop:12}}>
                    <View style={{height : 30, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                        <View style={{paddingLeft: 10, paddingRight: 20}}>
                            <TouchableHighlight underlayColor = "white" onPress={() => {
                                this.closeModal()
                            }}>
                                <View>
                                    <Ionicons
                                        name={'md-close'}
                                        size={26}  
                                        color={'grey'}
                                    />
                                </View>
                            </TouchableHighlight>  
                        </View>            
                        <View style={{marginTop:3}}>
                            <Text style={{color: "grey", fontWeight : 'bold'}}> FILTER BY </Text>
                        </View>
                        <View style={{flex:1, flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                            <View style={{marginTop:3,marginRight:10}}>
                                <TouchableHighlight underlayColor = "#E74C3C" onPress={() => {
                                    this.resetSelection()
                                }}>
                                    <View>
                                        <Text style={{color: "grey", fontWeight : 'bold'}}> CLEAR </Text>
                                    </View>    
                                </TouchableHighlight>    
                            </View>  
                            <View style={{backgroundColor: '#E74C3C',borderColor:'#E74C3C',padding:2,paddingLeft:10,
                                paddingRight:10,marginRight:10,marginBottom:6,borderWidth :1,borderRadius:3}}>
                                <TouchableHighlight underlayColor = "#E74C3C" onPress={() => {
                                    this.applySelection()
                                }}
                                > 
                                    <View>
                                        <Text style={{color: "white", fontWeight : 'bold'}}> APPLY </Text>
                                    </View>
                                </TouchableHighlight>              
                            </View>
                        </View>            
                    </View>
                    <View>
                        <View style={{marginTop :15}}> 
                            <Text style={{color: "grey", fontWeight : 'bold', fontSize:22, 
                                textAlign: 'center',textDecorationLine:'underline'}}>
                                Document Type
                            </Text>                        
                        </View> 
                        <ScrollView>
                            {
                            this.state.filters.map((checkbox,index) =>                            
                            <CheckBoxComponent 
                                    label = {checkbox.docType + " (" + checkbox.docCount + ")"}
                                    isChecked = {checkbox.checked}
                                    docType = {checkbox.docType}
                                    handleCheckboxChange={this.toggleCheckbox}
                                    key = {index} 
                            />
                            )} 
                        </ScrollView>      
                    </View>
                </View>
        </Modal>
        );
    }
}