import * as types from '.';

export const getBlogs = (page) => ({
    type: types.GET_BLOGS, page
})

export function getBlog(id) {
    return { type: types.GET_BLOG, id }
}