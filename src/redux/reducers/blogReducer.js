import {
    SET_BLOGS,
    BLOGS_LOADING,
    SET_BLOG
} from "../actions/index";

const initialState = {
    blogs: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BLOGS_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
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