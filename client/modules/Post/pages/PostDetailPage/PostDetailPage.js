import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPostRequest } from '../../PostActions';
import Helmet from 'react-helmet';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { darkBlack} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

function PostDetailPage(props) {
  return (
    <div>
      <Helmet title={props.post.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <ListItem
            disabled={true}
            primaryText={<h1>{props.post.title}</h1>}
            secondaryText={
                  <p style={{'paddingTop':10, paddingBottom:20}}>
                    <span style={{color: darkBlack }}>By {props.post.name}</span>
                  </p>
                }

            />
        <Divider inset={true} />
        <Paper zDepth={0} style = {{padding:'20px'}}  children = {props.post.content} />
      </div>
    </div>
  );
}

PostDetailPage.need = [(params) => {
  return getPostRequest.bind(null, params.slug)();
}];

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    post: store.posts.post,
  };
}

export default connect(mapStateToProps)(PostDetailPage);
