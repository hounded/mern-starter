import { LOG_USER } from './UserActions.js';

const initialState = {user:[] };

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_USER:
            return {
                user: [{
                    name: action.name
                }]
            };
        default:
            return state;

    }
};

export default UserReducer;