//Import material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {
    blue500, blue700,blue100,
    grey100, grey300, grey400, grey500,
    pinkA200,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme(lightBaseTheme,{
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100
    }
});
export default muiTheme