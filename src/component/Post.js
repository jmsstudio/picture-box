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

  like(user) {
    const { likers } = this.state;
    let updatedLikersList = [];
    if (likers.includes(user)) {
      updatedLikersList = likers.filter(liker => liker != user);
    } else {
      updatedLikersList = [...likers, user];
    }
    this.setState({ likers: updatedLikersList });
  }

  isLiked(user) {
    return (this.state.likers || []).includes(user);
  }

  render() {
    const currentUser = 'user01';

    return (
      <View key={this.state.id}>
        <View style={styles.header}>
          <Image source={{ uri: this.state.user_avatar_url }} style={styles.profileImage} />
          <Text style={styles.userName}>{this.state.username}</Text>
        </View>
        <Image source={{ uri: this.state.photo_url }} style={styles.post} />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.like(currentUser)}>
            <Image source={this._loadLikeIcon(this.isLiked(currentUser))} style={styles.likeButton} />
          </TouchableOpacity>
          {this.state.likers.length > 0 ? (
            <Text style={styles.likes}>
              {this.state.likers.length} {this.state.likers.length > 1 ? 'likes' : 'like'}
            </Text>
          ) : null}
        </View>
        {this.state.comments.map((comment, idx) => (
          <View style={styles.comments} key={idx}>
            <Text style={styles.commentTitle}>{comment.author}</Text>
            <Text>{comment.comment}</Text>
          </View>
        ))}
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
  likes: {
    fontWeight: 'bold',
  },
  comments: {
    flexDirection: 'row',
  },
  commentTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default Post;
