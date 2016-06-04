import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../UserActions.js';
import { toggleAddPost } from '../../../App/AppActions';
import {TextField} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import UserLoginWidget from '../../components/UserLoginWidget/UserLoginWidget.js';

class UserLoginPage extends Component {
    handleLogin = (username,password) => {
        this.props.dispatch(loginRequest({
            username,
            password}))
    };

    render() {
        return (
          <UserLoginWidget userLogin={this.handleLogin} />
        );
    };
}



UserLoginPage.contextTypes = {
    router: React.PropTypes.object,
    muiTheme: PropTypes.object.isRequired
};



UserLoginPage.propTypes = {

};

export default connect()(UserLoginPage);
