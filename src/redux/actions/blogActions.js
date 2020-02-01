import * as types from '.';

export const getBlogs = (page, category) => ({
    type: types.GET_BLOGS, page, category
})

export function getBlog(id) {
    return { type: types.GET_BLOG, id }
}