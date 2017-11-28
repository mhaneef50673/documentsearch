import React from 'react';
import SearchComponent from '../components/SearchComponent';


export default class SearchHome extends React.Component {
  
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