import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {blue50, white, lightBlack} from 'material-ui/styles/colors';


function Header(props, context) {
  return (

    <div>

        {
            context.router.isActive('/', true) ?
                <AppBar
                title= "MERN-MUI Starter Blog"
                onLeftIconButtonTouchTap ={props.onDraw}
                onTitleTouchTap ={props.toggleAddPost}
                iconElementRight={<FlatButton label="Add Post" onClick={()=>props.toggleAddPost()} />}
                />
                : <AppBar
                title= "MERN-MUI Starter Blog"
                onLeftIconButtonTouchTap ={props.onDraw}
                onTitleTouchTap ={()=>{
                context.router.push('/');
                }}
                />
        }
      <Drawer open={props.drawPos}>
        <AppBar
            title="MERN-MUI"
            onTitleTouchTap ={props.onDraw}
            onLeftIconButtonTouchTap ={props.onDraw}
            />
        <MenuItem containerElement={<Link to="/" />} onTouchTap={props.onDraw}>Home</MenuItem>
      </Drawer>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
  muiTheme: PropTypes.object.isRequired
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
    onDraw: PropTypes.func.isRequired,
};


export default Header;
