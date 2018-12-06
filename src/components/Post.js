import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

function Post({ item }) {
  return (
    <View key={item.id}>
      <View style={styles.header}>
        <Image source={require(`../../resources/images/img3.jpg`)} style={styles.profileImage} />
        <Text style={styles.userName}>{item.user}</Text>
      </View>
      <Image source={require(`../../resources/images/img1.png`)} style={styles.post} />
    </View>
  );
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
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

export default Post;
