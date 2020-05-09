import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const blogPosts = [
    { title: 'Blog Post #1'},
    { title: 'Blog Post #2'},
  ];
  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
