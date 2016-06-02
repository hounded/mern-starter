import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { darkBlack} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
// Import Style
import styles from './PostListItem.css';
import * as Actions from '../../PostActions.js';

function PostListItem(props,context) {
  return (
      <div>

          <ListItem
              primaryText={<h1>{props.post.title}</h1>}
              secondaryText={
                      <p>
                        <span style={{color: darkBlack}}>By {props.post.name}</span> --
                        {props.post.content}
                      </p>
                    }
              onTouchTap = {()=>{
                    props.dispatch(Actions.addSelectedPost(props.post));
                    context.router.push(`/post/${props.post.slug}-${props.post.cuid}`);
                    }
                }
              secondaryTextLines ={2}
              />

          <Divider inset={true} />

      </div>

  );
}

PostListItem.contextTypes = {
  router: React.PropTypes.object,
  muiTheme: PropTypes.object.isRequired
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect()(PostListItem);
