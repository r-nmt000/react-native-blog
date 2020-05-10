import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({route}) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === (route.params?.id ?? 0));
  return (
    <View>
      <Text>Edit Screen - {route.params?.id ?? 0}</Text>
      <Text>Title</Text>
      <TextInput value={blogPost.title} />
      <Text>Content</Text>
      <TextInput value={blogPost.content} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
