import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';
import { useFetchBlogsByIdQuery } from '../../../redux/features/blogs/blogsApi';

const PostAComment = () => {

    const {id} = useParams();
    const [comment, setComment] = useState('');
    const {user} = useSelector((state) => state.auth);
    const [postComment] = usePostCommentMutation();
    const {refetch} = useFetchBlogsByIdQuery(id, {skip:!id});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user) {
            alert('Por favor inicia sesión para poder comentar');
            navigate("/login");
            return;
        }
        const newComment = {
            comment: comment,
            user: user?._id,
            postId: id
        }
        try {
            const response = await postComment(newComment).unwrap();
            console.log(response);
            alert('comentario enviado');
            setComment('');
            refetch()
        } catch (error) {
            alert('Ocurrió un error con enviando el comentario')
        }
    }

  return (
    <div className='mt-8'>
        <h3 className='text-lg font-medium mb-8'>Deja un comentario</h3>
        <form onSubmit={handleSubmit}>
            <textarea 
                name="text" 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                cols="30"
                rows="3"
                placeholder='Comparte tu eopinon aquí...'
                className='w-full bg-bgPrimary focus:outline-none p-5'
            />
            <button
                type='submit'
                className='w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
            >
                Enviar
            </button>
        </form>
    </div>
  )
}

export default PostAComment