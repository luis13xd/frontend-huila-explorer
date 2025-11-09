import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import List from "@editorjs/list";
import Header from '@editorjs/header';
import { useFetchBlogsByIdQuery, usePostBlogMutation, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {

    const { id } = useParams();
    const editorRef = useRef(null);
    const [title, setTitle] = useState("");
    const [coverImg, setCoverImg] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    const [updateBlog] = useUpdateBlogMutation()

    const { data: blog = {}, error, isLoading, refetch } = useFetchBlogsByIdQuery(id);
    console.log(blog)
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (blog.post) {
            const editor = new EditorJS({
                holder: 'editorjs',
                onReady: () => {
                    editorRef.current = editor;
                },
                autofocus: true,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,
                    },
                    list: {
                        class: List,
                        inlineToolbar: true,
                    }
                },
                data: blog.post.content
            });
            return () => {
                editor.destroy();
                editorRef.current = null;
            }
        }
        
    }, []);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const content = await editorRef.current.save();
            const updatedPost = {
                title: title || blog.post.title,
                coverImg: coverImg || blog.post.coverImg,
                content,
                category,
                description: metaDescription || blog.post.description,
                author: user?._id,
                rating: rating || blog.post.rating
            }
            //console.log(updatePost)
            const response = await updateBlog({id, ...updatedPost}).unwrap();
            console.log(response)
            alert("guardadooo actualizado")
            refetch();
            navigate('/dashboard')
        } catch (error) {
            console.error("Eroor al subir sitio", error);
            setMessage("fallo al guardadr")
        }
    }

    return (
        <div className='bg-white md:p-8 p-2'>
            <h2 className='text-2xl font-semibold'>Editar sitio</h2>
            <form
                onSubmit={handleSubmit}
                className='space-y-5 pt-8'
            >

                <div className='space-y-4'>
                    <label className='font-semibold text-xl'>Titulo: </label>
                    <input
                        type="text"
                        defaultValue={blog?.post?.title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                        placeholder='Ejemplo: Mirador del Huila ...'
                        required
                    />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-start gap-4'>

                    <div className='md:w-2/3 w-full'>
                        <p className='font-semibold text-xl mb-5'>Contenido</p>
                        <p className='text-xs italic'>Escribe la informacion de tu sitio aquí...</p>
                        <div id="editorjs">

                        </div>
                    </div>

                    <div className='md:w-1/3 w-full border  p-5 space-y-5'>
                        <p className='text-xl font-semibold'>Formato</p>

                        <div className='space-y-4'>
                            <label className='font-semibold'>Blog Cover: </label>
                            <input
                                type="text"
                                defaultValue={blog?.post?.coverImg}
                                onChange={(e) => setCoverImg(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='https://unsplash.com/fotos...'
                                required
                            />
                        </div>

                        <div className='space-y-4'>
                            <label className='font-semibold '>Categoria: </label>
                            <input
                                type="text"
                                defaultValue={blog?.post?.category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Camping/Hotel/Piscina/Glamping/Finca...'
                                required
                            />
                        </div>

                        <div className='space-y-4'>
                            <label className='font-semibold '>Descripción: </label>
                            <textarea
                                type="text"
                                cols={4}
                                rows={4}
                                defaultValue={blog?.post?.description}
                                onChange={(e) => setMetaDescription(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Escribe una descripción...'
                                required
                            />
                        </div>

                        <div className='space-y-4'>
                            <label className='font-semibold '>Calificaión: </label>
                            <input
                                type="number"
                                defaultValue={blog?.post?.rating}
                                onChange={(e) => setRating(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                required
                            />
                        </div>

                        <div className='space-y-4'>
                            <label className='font-semibold '>Creado por: </label>
                            <input
                                type="text"
                                value={user.username}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder={`{user.username}`}
                                disabled
                            />
                        </div>

                    </div>
                </div>

                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button
                    type='submit'
                    disabled={isLoading}
                    className='w-[50%] mt-5 mx-auto bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
                >
                    Actualizar
                </button>

            </form>
        </div>
    )
}

export default UpdatePost