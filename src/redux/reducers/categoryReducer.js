import {
    SET_CATEGORIES,
} from "../actions/index";

const initialState = {
    categories: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        default:
            return state;
    }
}