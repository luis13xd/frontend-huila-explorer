import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import List from "@editorjs/list";
import Header from '@editorjs/header';
import { usePostBlogMutation } from '../../../redux/features/blogs/blogsApi';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [postBlog, {isLoading}] = usePostBlogMutation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
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

    });
    return () => {
      editor.destroy();
      editorRef.current = null;
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        coverImg,
        content,
        category,
        description: metaDescription,
        author: user?._id,
        rating
      }
      const response = await postBlog(newPost).unwrap();
      console.log(response)
      alert("guardadooo")
      navigate('/')
    } catch (error) {
      console.error("Eroor al subir sitio", error);
      setMessage("fallo al guardadr")
    }
  }

  return (
    <div className='bg-white md:p-8 p-2'>
      <h2 className='text-2xl font-semibold'>Crear nuevo sitio</h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-5 pt-8'
      >

        <div className='space-y-4'>
          <label className='font-semibold text-xl'>Titulo: </label>
          <input
            type="text"
            value={title}
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
                value={coverImg}
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
                value={category}
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
                value={metaDescription}
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
                value={rating}
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
            Crear
        </button>

      </form>
    </div>
  )
}

export default AddPost