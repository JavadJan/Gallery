import React from 'react'

export const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')
    return (
        <div className="max-w-sm overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>views: </strong>{image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>{image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>{image.likes}
                    </li>
                </ul>
            </div>

            <div className="px-6 py-4">
                {tags.map((tag , i)=>(
                    <span key={image.id+i} className="inline-block bg-gray-200 round-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{
                        tag.at(0)===" " ? tag.replace(" ","") : tag.replace(" ","_")
                    }</span>
                ))}

            </div>
        </div>
    )
}
