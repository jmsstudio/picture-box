import React from 'react';
import { Text, View, Image, ScrollView, Dimensions, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    const width = Dimensions.get('screen').width;

    const data = [
      { id: 1, user: 'john.armless', image: 'img1.png' },
      { id: 2, user: 'mary.christmas', image: 'img2.png' },
      { id: 3, user: 'james.bond', image: 'img3.jpg' },
      { id: 4, user: 'john.doe', image: 'img4.png' },
    ];

    return (
      <>
        <ScrollView>
          {data.map(item => (
            <View key={item.id}>
              <Text>{item.user}</Text>
              <Image source={require(`./resources/images/img1.png`)} style={{ width, height: width }} />
            </View>
          ))}
        </ScrollView>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={item => (
            <View key={item.id}>
              <Text>{item.user}</Text>
              <Image source={require(`./resources/images/img1.png`)} style={{ width, height: width }} />
            </View>
          )}
        />
      </>
    );
  }
}
