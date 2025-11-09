import React from 'react'
import { formatDate } from '../../../utils/formateDate';
import EditorJSHTML from "editorjs-html";

const editorJSHTML = EditorJSHTML();

const SingleBlogCard = ({blog}) => {

    const {title, description, content, coverImg, category, rating, author, createdAt} = blog || {};
    const htmlContent = editorJSHTML.parse(content).join('');
    

  return (
    <>
        <div>

            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>
                    {title}
                </h1>
                <p>{formatDate(createdAt)}</p>
            </div>

            <div>
                <img src={coverImg} alt="Imagen" className='w-full md:h-[520px] bg-cover' />
            </div>

            <div className='mt-8 space-y-4' >
                <div className='space-y-3 editorjsdiv' dangerouslySetInnerHTML={{__html: htmlContent}} />
            
                <div>
                    <span className='text-lg font-medium'>Puntuación: </span>
                    <span>{rating}</span>
                </div>
            </div>

        </div>
    </>
  )
}

export default SingleBlogCard