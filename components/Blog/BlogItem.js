import Head from 'next/head'
import Image from 'next/image'

import DefaultImg from '../../assets/images/default-img.png'


import Author from './Author';

export default function BlogItem({ data }) {    
    const { title, excerpt, covers, categories, author, publishedAt, reading_time } = data.attributes
    const coverImage = covers && covers.data && covers.data.attributes ? covers.data.attributes.url : DefaultImg
    console.log('Blog sing categories', author)
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                    <Image
                        className="h-48 w-full object-cover" 
                        alt={title}
                        width={420}
                        height={240}
                        src={coverImage}
                    />
            
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    {categories && categories.data.length>0 && categories.data.map((cat, index)=>{
                        return(
                        <p className="text-sm font-medium text-indigo-600" key={index}>
                            <a href="#" className="hover:underline"> {cat.attributes.name.charAt(0).toUpperCase() + cat.attributes.name.slice(1).toLowerCase()} </a>
                        </p>
                    )})}                    
                    <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{excerpt}</p>
                    </a>
                </div>
                {author && author.data && author.data.id && <Author author={author} publishedAt={publishedAt}/>}                
            </div>
        </div>
    )
}
