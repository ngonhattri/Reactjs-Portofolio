import {
    SET_TRAVEL
} from "../actions/index";

const initialState = {
    travel: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TRAVEL:
            return {
                ...state,
                travel: action.payload,
                loading: false
            }
        default:
            return state;
    }
}