// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_DRAW } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  drawPosition: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        ...state,
        showAddPost: !state.showAddPost,
      };
    case TOGGLE_DRAW:
      return {
        ...state,
        drawPosition: !state.drawPosition
      };
    default:
      return state;
  }
};

export default AppReducer;
