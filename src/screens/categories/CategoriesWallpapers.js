import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import FastImage from 'react-native-fast-image';
import firebase from 'react-native-firebase';

export default class CategoriesWallpapers extends Component {
  state={categorieName:this.props.navigation.state.params.categorieName}

  componentDidMount() {
    firebase
      .database()
      .ref(this.state.categorieName)
      .on('value', snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({categorieName: items});
      });
  }

  goToWallM(image) {
    this.props.navigation.navigate('WallScreenCategories', {picture: image});
  }

  wall = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.imageTouchable}
        onPress={() => this.goToWallM(item.image)}>
        <FastImage
          style={styles.image}
          source={{uri: item.image, priority: FastImage.priority.normal}}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList
          numColumns={2}
          renderItem={this.wall}
          keyExtractor={(item, index) => index}
          data={this.state.categorieName}
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
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  imageTouchable: {
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
});
