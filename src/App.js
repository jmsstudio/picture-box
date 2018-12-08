import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from './component/Post';
import PostService from './service/PostService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    PostService.listPictures()
      .then(response => this.setState({ pictures: response.data }))
      .catch(err => alert(err));
  }

  render() {
    return (
      <>
        <FlatList
          style={styles.container}
          data={this.state.pictures}
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
