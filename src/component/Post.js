import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
  }

  _loadLikeIcon(isLiked) {
    return isLiked ? require('../../resources/like-checked.png') : require('../../resources/like-o.png');
  }

  like() {
    this.setState({ ...this.state, liked: !this.state.liked });
  }

  render() {
    return (
      <View key={this.state.id}>
        <View style={styles.header}>
          <Image source={{ uri: this.state.user_avatar_url }} style={styles.profileImage} />
          <Text style={styles.userName}>{this.state.username}</Text>
        </View>
        <Image source={{ uri: this.state.photo_url }} style={styles.post} />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.like()}>
            <Image source={this._loadLikeIcon(this.state.liked)} style={styles.likeButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginTop: 5,
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
  footer: {
    margin: 5,
    alignItems: 'flex-end',
  },
  likeButton: {
    width: 40,
    height: 40,
  },
});

export default Post;
