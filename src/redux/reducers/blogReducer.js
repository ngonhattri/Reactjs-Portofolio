import {
    SET_BLOGS,
    SET_BLOG
} from "../actions/index";

const initialState = {
    blogs: [],
    blog: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case SET_BLOG:
            return {
                ...state,
                blog: action.payload,
                loading: false
            }
        default:
            return state;
    }
}