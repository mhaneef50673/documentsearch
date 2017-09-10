import React from 'react';
import SearchComponent from '../components/SearchComponent';


export default class SearchHome extends React.Component {
  
  constructor(props){
    // Always super constructor call comes first
    super(props);
  }   

  static navigationOptions = {
    header : null  
  };

  componentDidMount(){  
  }
  
  render() {           
    return (  
      <SearchComponent navigate = {this.props.navigation} /> 
    );
  }
}