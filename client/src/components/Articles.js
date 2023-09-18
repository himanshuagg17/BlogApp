import React from 'react'
import { Link } from 'react-router-dom'
import articleContent from "../pages/article-content"
const Articles = ({articles}) => {
  return (
    <div>
          {articleContent.map((article, index) => (
            <div key={index} className="p-y md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>

                <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0,100)}
                </p>

                <div className="flex item-center flex-wrap">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/article/${article.name}`}>
                        Learn more...
                    </Link>
                </div>



              </div>
            </div>
          ))}
    </div>
  )
}

export default Articles