import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import moment from 'moment';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link';

import SideBar from './Sidebar';


import BlogImg from "../../assets/images/blog_img.jpg"

import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
// import DefaultImg from '../../assets/images/default-img.png'


// import Author from './Author';

export default function Index({ data }) {
    console.log('single data',data)
    const {
        title,
        slug,
        content,
        cover_image,
        author,
        publishedAt,
        tags } = data.attributes

        const MarkdownComponents = {
            h2: heading => {
                const { node } = heading
                if (node.children[0].type === "text") {
                    return (
                        <h2 id={`${node.children[0].value.replace(" ", "_").toLowerCase()}`}>{node.children[0].value}</h2>
                    )
                }
            },
            p: paragraph => {
                const { node } = paragraph
                if (node.children[0].type === "raw" && node.children[0].value==='<u>') {
                    return(
                        <div className="w-full py-3">
                        <span className="underlinetext">{paragraph.children[1]}</span>{paragraph.children[3]}
                        </div>
                    )
                }
                if (node.children[0].tagName === "img") {
                    const image = node.children[0]
                    const metastring = image.properties.alt
                    const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                    const metaWidth = metastring.match(/{([^}]+)x/)
                    const metaHeight = metastring.match(/x([^}]+)}/)
                    const width = metaWidth ? metaWidth[1] : "768"
                    const height = metaHeight ? metaHeight[1] : "432"
                 return (
                        <div className="postImgWrapper">
                            <Image
                                src={image.properties.src}
                                alt={alt}
                                width={width}
                                height={height}
                            />
                            {alt ? <p className="small" aria-label={alt}>{alt}</p> : null}
                        </div>
                    )
                }
                return <p>{paragraph.children}</p>
    
    
            },
        }
    return (
        <div className='w-100 blog-content'>
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
                <h6 className='text-center'>{moment(publishedAt).format("dddd, MMM d,  YYYY")}Sunday, May 2, 2021</h6>
                <h1 className='text-center'>{title}</h1>
                <div className="border-t border-gray-300 mt-8 md:grid md:grid-cols-3 grid-cols-1 xl:gap-20 gap-10 w-100 py-16 relative">
                    <div className='col-span-1'>
                        <SideBar content={content} author={author?.data?.id} tags={tags}/> 
                    </div>
                    <div className='col-span-2'>
                        <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
                    </div>
                </div>
                {/* <div className='pagination'>

                    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
                        <div className="flex">
                            <a
                                href="#"
                                className=" py-3 px-4 shadow mt-8 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                Previous
                            </a>
                        </div>

                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="py-3 px-4 shadow mt-8 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                Next
                                <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </nav>

                </div> */}
            </div>
        </div>
    )
}
