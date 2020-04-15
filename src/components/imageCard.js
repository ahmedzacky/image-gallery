import React from 'react'

const imageCard = ({ image }) => {
    const tags = image.tags.split(',')
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg">
          <a href={image.webformatURL} a target="_blank" rel="noopener noreferrer"><img src={image.webformatURL} className="w-full" alt="#"/></a>
          <div className="px-6 py-4 my-auto">
            <div className="font-bold text-purple-500 mb-2">
              Photo by {image.user}
            </div>
            <ul>
              <li><strong>Views: </strong>{image.views}</li>
              <li><strong>Downloads: </strong>{image.downloads}</li>
              <li><strong>Likes: </strong>{image.likes}</li>
            </ul>
          </div>
          <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag.trim().replace(' ','_')}
              </span>
                ) )}
          </div> 
        </div>
    )
}

export default imageCard
