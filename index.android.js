import React from 'react';
import { AppRegistry, Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from 'react-native-vector-icons';
import RootNavigation from './navigation/RootNavigation';

export default class documentsearch extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  componentWillMount() {
    //this._loadAssetsAsync();
  }

  render() {
      return (
        <View style={styles.container}>
{/*           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />} */}
          <RootNavigation />
        </View>
      );    
  }

  /* async _loadAssetsAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require('./assets/images/csv.png'),
          require('./assets/images/doc.png'),
          require('./assets/images/image.png'),
          require('./assets/images/pdf.png'),
          require('./assets/images/ppt.png'),
          require('./assets/images/txt.png'),
          require('./assets/images/xlsx.png'),
        ]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          //{ 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ]),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  } */
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

AppRegistry.registerComponent('documentsearch', () => documentsearch);