import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// Import Style
import styles from './PostCreateWidget.css';

class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name.input;
    const titleRef = this.refs.title.input;
    const contentRef = this.refs.content.input.refs.input;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    const style = {
      margin: 12,
    };
    return (
      <div className={cls}>
        <div >
          <h2 >Create new post</h2>
          <TextField
              id='name'
              ref='name'
              hintText="Author's Name"
              fullWidth={true}
              />
          <TextField
              id='title'
              ref='title'
              hintText="Post Title"
              fullWidth={true}
              />
          <TextField
              id='content'
              ref='content'
              hintText="Post Content"
              fullWidth={true}
              multiLine={true}
              />
          <RaisedButton label="Submit" primary={true} style={style}   onTouchTap={this.addPost}/>

        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateWidget;
