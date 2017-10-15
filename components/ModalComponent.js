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
            modalVisible : this.props.modalVisible,
            filters : this.props.modalData
        }
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {                                
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label); 
        }                   
        console.log(this.selectedCheckboxes);
    }

    render(){
        var setModalVisible  =   this.props.setModalVisible;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    setModalVisible()
                }}
            >
            <View style={{paddingTop:22}}>
                <View style={{height : 30, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                    <View style={{paddingLeft: 10, paddingRight: 20}}>
                        <TouchableHighlight onPress={() => {
                            setModalVisible()
                        }}>
                            <Ionicons
                                name={'md-close'}
                                size={26}  
                                color={'grey'}
                            />
                        </TouchableHighlight>  
                    </View>            
                    <View style={{marginTop:3}}>
                        <Text style={{color: "grey", fontWeight : 'bold'}}> FILTER BY </Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                        <View style={{marginTop:3,marginRight:10}}>
                            <Text style={{color: "grey", fontWeight : 'bold'}}> CLEAR </Text>
                        </View>  
                        <View style={{backgroundColor: '#E74C3C',borderColor:'#E74C3C',padding:2,paddingLeft:10,
                            paddingRight:10,marginRight:10,marginBottom:6,borderWidth :1,borderRadius:3}}>
                            <TouchableHighlight> 
                                <Text style={{color: "white", fontWeight : 'bold'}}> APPLY </Text>
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