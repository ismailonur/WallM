import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');

//Ödüllü START
const advertReward = firebase
  .admob()
  .rewarded('ca-app-pub-7215776518930801/8893840364');
const AdRequestReward = firebase.admob.AdRequest;
const requestReward = new AdRequestReward();
requestReward.addKeyword('foo').addKeyword('bar');

// Load the advert with our AdRequest
advertReward.loadAd(request.build());

advertReward.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});


//Ödüllü END

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class Downloads extends Component {
  state ={wallCoin:null, response:true}
  goToWallM() {

    if (advertReward.isLoaded() && this.state.response===true) {
      advertReward.show();
      alert("Tebrikler 10 Star Kazandınız!")
      this.setState({response:false})
    this.earnCoin();
    } else {
      alert('Şimdilik bu kadar daha sonra tekrar deneyiniz!');
    }
  }

  async earnCoin(){
    const value = await AsyncStorage.getItem('@wallCoin');
    if (value !== null) {
      let coin = parseInt(value, 10);
      this._storeData((coin+10).toString());
    } else{
      this._storeData(10);
    }
  }

  _storeData = async (value) => {
    let coin = parseInt(value, 10);
      await AsyncStorage.setItem('@wallCoin', value.toString());
    this.setState({wallCoin: coin});
  };


async componentDidMount(){
  const value = await AsyncStorage.getItem('@wallCoin');
  if (value !== null) {
    let coin = parseInt(value, 10);
    this.setState({wallCoin: coin});
  } else{
    this.setState({wallCoin:0})
  }






}
  render() {
    return (
      <View style={styles.container}>
        <Banner
          size={'SMART_BANNER'}
          unitId={'ca-app-pub-7215776518930801/6922869870'}
          request={request.build()}
          onAdLoaded={() => {
            //alert("reklam")
          }}
        />
        <StatusBar hidden={true} />
        <View style={styles.text}>
          <Text style={styles.text}>Downloads</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFD700', fontSize: 36}}>{this.state.wallCoin}</Text>
          <Icon name="star" type="evilicon" color="#FFD700" size={48} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: '#fff', borderRadius: 20}}
            onPress={() => this.goToWallM()}>
            <Text
              style={{
                color: '#fff',
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 18,
              }}>
              Earn Stars
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color:'#ffffff', top:screenHeight/4, fontSize:18}}>Bu sayfa yapım aşamasındadır! {"\n"}Star'ları biriktir, sürprize hazır ol!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  image: {
    width: screenWidth / 2.06,
    height: screenHeight / 2.06,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#686868',
  },

  text: {
    fontSize: 42,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  imageTouchable: {
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
});
