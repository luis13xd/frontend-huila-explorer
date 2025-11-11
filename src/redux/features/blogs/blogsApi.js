import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api';

export const blogApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Blogs', 'Blog'], // 👈 añadimos ambos tipos de etiquetas
  endpoints: (builder) => ({
    
    // 🔹 Obtener todos los blogs
    fetchBlogs: builder.query({
      query: ({ search = '', category = '', location = '' }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
      providesTags: ['Blogs'], // 👈 RTK sabe que esto provee la lista
    }),

    // 🔹 Obtener un blog por ID
    fetchBlogsById: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blog', id }],
    }),

    // 🔹 Obtener blogs relacionados
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
    }),

    // 🔹 Crear blog
    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: `/blogs/create-post`,
        method: "POST",
        body: newBlog,
        credentials: "include",
      }),
      invalidatesTags: ['Blogs'], // 👈 fuerza recarga de la lista
    }),

    // 🔹 Actualizar blog
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update-post/${id}`,
        method: "PATCH",
        body: rest,
        credentials: "include",
      }),
      invalidatesTags: ['Blogs', 'Blog'], // 👈 esto es CLAVE
    }),

    // 🔹 Eliminar blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ['Blogs'], // 👈 también fuerza recarga
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogsByIdQuery,
  useFetchRelatedBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
