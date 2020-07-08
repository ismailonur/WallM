import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-navigation';
import CategoriesWallpapers from '../categories/CategoriesWallpapers';
import firebase from "react-native-firebase";
import FastImage from 'react-native-fast-image';
const screenWidth = Dimensions.get('window').width;

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');

export default class Categories extends Component {
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
        <ScrollView>
          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'CafeRacer'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F1.png?alt=media&token=2e4e0c8d-2464-4e5b-b074-4e5db4890ffc',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Cross'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F2.png?alt=media&token=0a8829a2-b4f3-40d9-b7a8-b5dcc8c75f2f',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Cruiser'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F3.png?alt=media&token=45c60555-4a15-49bf-a6bc-b4fe46a2468e',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Enduro'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F4.png?alt=media&token=667e3f7e-5ee9-46de-8e3c-103dae6464c1',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Helmet'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F5.png?alt=media&token=08f3b50a-6c16-4ea7-8eda-64dcacd9f40a',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Naked'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F6.png?alt=media&token=0f3a4100-cb86-441c-842f-729ecfafdba5',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'Scooter'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F7.png?alt=media&token=d927a6ec-8c91-4852-be22-687193a833d5',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoriesTouchable}
            onPress={() =>
              this.props.navigation.navigate('CategoriesWallpapers', {categorieName:'SuperSport'})
            }>
            <FastImage
              style={styles.image}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/wallm-43290.appspot.com/o/CategoriesPictures%2F8.png?alt=media&token=279d1c7e-6cf1-4072-bf20-1f649804463a',
                priority: FastImage.priority.normal,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  categoriesText: {
    fontSize: 42,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
  },

  categoriesTouchable: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: screenWidth - 10,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#686868',
  },
});
