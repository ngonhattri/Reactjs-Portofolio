import * as types from '.';

export function getTravel(id) {
    return { type: types.GET_TRAVEL, id }
}