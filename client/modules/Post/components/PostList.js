import React, { PropTypes } from 'react';
import PostListItem from './PostListItem/PostListItem';
import {List, ListItem} from 'material-ui/List';

function PostList(props) {
  return (
    <List>
      {
        props.posts.map((post, i) => (
          <PostListItem
            post={post}
            key={i}
            onClick={() => props.handleShowPost(post)}
            onDelete={() => props.handleDeletePost(post)}
          />
        ))
      }
    </List>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleShowPost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
