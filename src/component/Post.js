import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.post, commentMessage: '' };
  }

  save(data) {
    this.props.onSave(data);
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

    this.save({ ...this.state, likers: updatedLikersList });
  }

  isLiked(user) {
    return (this.state.likers || []).includes(user);
  }

  addComment(user) {
    if (this.state.commentMessage) {
      const newComment = {
        author: user,
        comment: this.state.commentMessage,
      };

      this.setState({ comments: [...this.state.comments, newComment] });

      this.save({ ...this.state, comments: [...this.state.comments, newComment] });
    }
    this.setState({ commentMessage: '' });
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

        <View style={styles.newComment}>
          <TextInput
            style={styles.commentInput}
            placeholder="Type a comment..."
            value={this.state.commentMessage}
            onSubmitEditing={() => this.addComment(currentUser)}
            onChangeText={text => this.setState({ commentMessage: text })}
          />
          <TouchableOpacity onPress={() => this.addComment(currentUser)}>
            <Image source={require('../../resources/send.png')} style={styles.sendButton} />
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
  },
  likeButton: {
    width: 40,
    height: 40,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  comments: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  commentTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  newComment: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
  },
  sendButton: {
    width: 30,
    height: 30,
  },
});

export default Post;
