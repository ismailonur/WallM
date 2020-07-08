import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import FastImage from 'react-native-fast-image';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import firebase from 'react-native-firebase';

export default class HomePage extends Component {
  state = {images: [], allCategories: [], response: false};
  shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  componentDidMount() {
    let all = [
      {id: 'CafeRacer'},
      {id: 'Cross'},
      {id: 'Cruiser'},
      {id: 'Enduro'},
      {id: 'Helmet'},
      {id: 'Naked'},
      {id: 'Scooter'},
      {id: 'SuperSport'},
    ];

    for (var i = 0; i < all.length; i++) {
      //   alert(all[ix]['0'])
      firebase
        .database()
        .ref(all[i].id)
        .on('value', snapshot => {
          let data = snapshot.val();
          let items = Object.values(data);
          let update = [...this.state.images, ...items];
          let shuffle = this.shuffle(update);
          this.setState({images: shuffle});
        });
    } //for
  }

  goToWallM(image) {
    this.props.navigation.navigate('WallScreenMain', {picture: image});
  }

  wall = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.imageTouchable}
        onPress={() => this.goToWallM(item.image)}>
        <FastImage
          style={styles.image}
          source={{uri: item.image, priority: FastImage.priority.normal}}
          //resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.text}>
          <Text style={styles.text}>Newest</Text>
        </View>
        <FlatList
          numColumns={2}
          renderItem={this.wall}
          keyExtractor={(item, index) => index}
          data={this.state.images}
        />
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
    alignItems: 'center',
  },

  imageTouchable: {
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
});
