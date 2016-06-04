import React, { Component, PropTypes } from 'react';
import {TextField} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

// Import Style
//import styles from './PostCreateWidget.css';

class UserLoginWidget extends Component {

  userLogin = () => {



    const nameRef = this.refs.username.input;
    const passwordRef = this.refs.password.input;


    if (nameRef.value && passwordRef.value ) {
      this.props.userLogin(nameRef.value, passwordRef.value);
      nameRef.value = passwordRef.value = '';
    }

  };

  render() {
    const style = {
      margin: 12,
    };
    //const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (

     <div>

      <TextField
          hintText="Username"
          ref="username"
          id="username"
          floatingLabelText="Username"
          /><br />
      <TextField
          hintText="Password Field"
          ref="password"
          id="password"
          floatingLabelText="Password"
          type="password"
          /><br />
      <RaisedButton label="Login" onTouchTap={this.userLogin} labelPosition={'before'} primary={true}  style={style}  />
     </div>
    );
  }
}

UserLoginWidget.propTypes = {
  userLogin: PropTypes.func.isRequired,
  //showAddPost: PropTypes.bool.isRequired
};
UserLoginWidget.contextTypes ={
  muiTheme: PropTypes.object.isRequired
};


export default UserLoginWidget;
