import React, { Component, PropTypes } from 'react';

import {       
    Divider,
    CheckBox  
} from 'react-native-elements';  

import  Ionicons  from 'react-native-vector-icons/Ionicons';

class CheckBoxComponent extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            checked : this.props.isChecked,
            label : this.props.label,
            docType : this.props.docType            
        }
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label, docType } = this.props;
    
        this.setState(({ checked }) => (
          {
            checked: !checked,
          }
        ));
        console.log("docType is " + docType);
        handleCheckboxChange(docType);
    }

    render() {
        return(
            <CheckBox   
                title= {this.state.label}                
                checked={this.state.checked}
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