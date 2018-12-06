import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from './components/Post';

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
          renderItem={({ item }) => <Post item={item} />}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
