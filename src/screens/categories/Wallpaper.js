import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import data from '../../data/Data';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class App extends Component {
  wall = ({item, index}) => {
    return (
      <TouchableOpacity>
        <Image style={styles.imageStyle} source={{uri: item.picture}} />
      </TouchableOpacity>
    );
  };

  constructor() {
    super();
    this.state = {screenWidth: '', screenHeight: ''};
  }

  getScreenSize = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    this.setState({screenWidth: screenWidth, screenHeight: screenHeight});
  };

  render() {
    return (
      <View style={styles.imageStyle}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          renderItem={this.wall}
          keyExtractor={item => item.id}
          data={data}
        />
      </View>

      /*
			<View style={styles.container}>
				<View style={{ marginTop: 150 }}>
					<Text style={styles.headerText}> Screen width : {this.state.screenWidth}</Text>
					<Text style={styles.headerText}> Screen height : {this.state.screenHeight}</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<View style={[{ width: "40%", margin: 10 }]}>
						<Button
							onPress={this.getScreenSize}
							title="Get screen size"
						/>
					</View>
				</View>
			</View>
			*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },

  imageStyle: {
    width: screenWidth,
    height: screenHeight,
  },
});
