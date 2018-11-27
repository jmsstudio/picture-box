import React from 'react';
import { Text, View, Image, Dimensions, FlatList, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    const data = [
      { id: 1, user: 'john.armless' },
      { id: 2, user: 'mary.christmas' },
      { id: 3, user: 'james.bond' },
      { id: 4, user: 'john.doe' },
    ];

    return (
      <>
        <FlatList
          style={styles.container}
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={item => (
            <View key={item.id}>
              <View style={styles.header}>
                <Image source={require(`./resources/images/img3.jpg`)} style={styles.profileImage} />
                <Text style={styles.userName}>{item.item.user}</Text>
              </View>
              <Image source={require(`./resources/images/img1.png`)} style={styles.post} />
            </View>
          )}
        />
      </>
    );
  }
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  post: {
    width: width,
    height: width,
  },
});
