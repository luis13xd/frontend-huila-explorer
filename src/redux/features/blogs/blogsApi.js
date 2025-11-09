import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api';

export const blogApi = createApi({
    
    reducerPath: "blogsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        credentials: 'include'
    }),
    tagTypes: ['Blogs'],
    endpoints: (builder) => (
        {
            fetchBlogs : builder.query({
                query: ({search='', category='', location=''}) => `/blogs?search=${search}&category=${category}&location=${location}`,
                providesTags: ['Blogs'],
            }),
            fetchBlogsById: builder.query({
                query: (id) => `/blogs/${id}`
            }),
            fetchRelatedBlogs: builder.query({
                query: (id) => `/blogs/related/${id}`
            }),
            postBlog: builder.mutation({
                query: (newBlog) => ({
                    url: `/blogs/create-post`,
                    method: "POST",
                    body: newBlog,
                    credentials: "include",
                }),
                invalidatesTags: ['Blogs']
            }),
            updateBlog: builder.mutation({
                query: ({id, ...rest}) => ({
                    url: `/blogs/update-post/${id}`,
                    method: "PATCH",
                    body: rest,
                    credentials: "include",
                }),
                invalidatesTags: (resuult, error, {id}) => [{ type: 'Blogs', id }],
            }),
            deleteBlog: builder.mutation({
                query: (id) => ({
                    url: `/blogs/${id}`,
                    method: "DELETE",
                    credentials: "include",
                }),
                invalidatesTags: (resuult, error, {id}) => [{ type: 'Blogs', id }],
            }),

        }
    )
  })

  export const {useFetchBlogsQuery, useFetchBlogsByIdQuery, useFetchRelatedBlogsQuery, usePostBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation} = blogApi;