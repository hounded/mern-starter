import Config from '../../../server/config';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${Config.port}`) : '';

// Export Constants
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_USER = 'LOG_USER';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_SELECTED_POST = 'ADD_SELECTED_POST';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function logUser(user) {
    return {
        type: LOG_USER,
        name: user.name

    }
}
export function loginRequest(user) {
    console.log('hello');
    return (dispatch) => {
        fetch(`${baseURL}/api/postLogin`, {
            method: 'post',
            body: JSON.stringify({
                user: {
                    name: user.name,
                    password: user.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then((res) => res.json()).then(res => dispatch(logUser(res.post)));
    };
}

