import React from 'react';
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('posts');
    dispatch({ type: 'get_blogposts', payload: response.data});
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('posts', { title: title, content: content });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`posts/${id}`, {title: title, content: content});
    dispatch({ type: 'edit_blogpost', payload: { id, title, content} });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`posts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    editBlogPost,
    deleteBlogPost,
  },
  []);
