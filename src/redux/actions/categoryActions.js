import * as types from '.';

export const getCategories = (page) => ({
    type: types.GET_CATEGORIES, page
});