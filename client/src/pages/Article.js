import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from "./article-content";
import NotFound from './NotFound';

function Article() {
  const {name}=useParams();
  const article=articleContent.find((article)=> article.name === name)
  if(!article){
     return <NotFound />
  }
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>

      {article.content.map((paragraph,index)=>(
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
      ) )}
    </div>
  )
}

export default Article