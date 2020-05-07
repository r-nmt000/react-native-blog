import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  return (
    <BlogContext.Provider>
      {children}
    </BlogContext.Provider>
  );
};

