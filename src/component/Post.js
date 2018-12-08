import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

function Post({ item }) {
  return (
    <View key={item.id}>
      <View style={styles.header}>
        <Image source={{ uri: item.user_avatar_url }} style={styles.profileImage} />
        <Text style={styles.userName}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.photo_url }} style={styles.post} />
    </View>
  );
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
});

export default Post;
