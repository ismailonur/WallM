import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ImageBackground,
  Text
} from 'react-native';

import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import firebase from 'react-native-firebase';
import FastImage from 'react-native-fast-image';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const advert = firebase
  .admob()
  .interstitial('ca-app-pub-7215776518930801/7631701911');

const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foo').addKeyword('bar');

// Load the advert with our AdRequest
advert.loadAd(request.build());

advert.on('onAdLoaded', () => {
  //alert('Advert ready to show.');
});

export default class WallScreen extends Component {
  _callback = res => {
    console.log('Response: ', res);
  };

  _setWallpaper = () => {
    setTimeout(() => {
      if (advert.isLoaded()) {
        advert.show();
      } else {
     //   alert('reklam henüz hazır değil');
      }
    }, 1000);

    ManageWallpaper.setWallpaper(
      {
        uri: this.props.navigation.state.params.picture,
      },
      this._callback,
      TYPE.BOTH,
    );
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <FastImage
          style={styles.image}
          source={{
            uri: this.props.navigation.state.params.picture,
            priority: FastImage.priority.normal,
          }}
        />
          <TouchableOpacity
            style={{
              zIndex:50,
              bottom:screenHeight/6,
              left:(screenWidth/2)-56/2
            }}
            onPress={this._setWallpaper}>
            <Image source={require('../images/wall.png')} />
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: screenWidth,
    height: screenHeight,
  },
});
