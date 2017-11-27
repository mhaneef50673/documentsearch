import React, { Component, PropTypes } from 'react';

import {       
    Divider,
    CheckBox  
} from 'react-native-elements';  

import  Ionicons  from 'react-native-vector-icons/Ionicons';

class CheckBoxComponent extends Component {
   
    constructor(props){
        super(props);
        /*this.state = {
            label : this.props.label,
            docType : this.props.docType            
        }*/
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label, docType } = this.props;
        console.log("docType is " + docType);
        handleCheckboxChange(docType);
    }

    render() {
        const { isChecked, label } = this.props;
        return(
            <CheckBox   
                title= {label}                
                checked={isChecked}
                onPress = {this.toggleCheckboxChange}
                onIconPress = {this.toggleCheckboxChange}                
                checkedColor = '#E74C3C'
                textStyle = {{fontSize:14}}
                containerStyle = {{backgroundColor : 'white',borderColor:'white',borderWidth:0,borderRadius:0,margin:3,padding:10}}
            /> 
        );
    }    
}

CheckBoxComponent.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default CheckBoxComponent;