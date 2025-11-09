import React from 'react';
import commentorIco from '../../../assets/commentor.png'
import { formatDate } from '../../../utils/formateDate';
import PostAComment from './PostAComment';
import { useSelector } from 'react-redux';

const CommentCard = ({ comments }) => {
    console.log(comments)
    const user = useSelector((state) => state.auth.user); //9-6

    return (
        <div className='my-6 bg-white p-8'>

            <div>
                {
                    comments?.length > 0 
                        ? <div>
                            <h3 className='text-lg font-medium'>Comentarios</h3>
                            <div>
                                {
                                    comments.map((comment, index) => (
                                        <div key={index} className='mt-4'>
                                            <div className='flex gap-4 items-center'>
                                                <img src={commentorIco} alt="" className='h-14'/>
                                                <div>
                                                    <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>
                                                        {comment?.user.username}
                                                    </p>
                                                    <p className='text-[12px] italic'>
                                                        {formatDate(comment.createdAt)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='text-gray-600 mt-5 border p-8'>
                                                <p className='md:w-4/5'>{comment?.comment}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> 
                        : <div className='text-lg font-medium'>No hay comentarios.</div>
                }
            </div>

            <PostAComment />

        </div>
    )
}

export default CommentCard