import Image from 'next/image'
import Link from 'next/link';
import useSWR, { useSWRPages } from "swr";
import ReactMarkdown from "react-markdown"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AuthorDetails from './AuthorDetails';

const SideBar = ({ content, author, tags }) => {
    console.log('tags data',tags)
    const MarkdownComponents = {
        h2: heading => {
            const { node } = heading
            if (node.children[0].type === "text") {
                return (
                    <li className="text-base font-medium text-gray-500 mb-2"><AnchorLink href={`#${node.children[0].value.replace(" ", "_").toLowerCase()}`}>{node.children[0].value}</AnchorLink></li>
                )
            }
        },
        p: paragraph => {
            return null
        },
        h1: paragraph => {
            return null
        },
        h3: paragraph => {
            return null
        },
        h4: paragraph => {
            return null
        },
        h5: paragraph => {
            return null
        },
        h6: paragraph => {
            return null
        }
    }
    return (
        <div className='sticky top-4 w-full blog_sidebar'>
            <h6>Table of contents</h6>
            <ul className='mt-4'>
                <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
            </ul>
            <AuthorDetails author={author}/>
            {tags && tags.data && tags.data.length>0 && (
                <div className='flex flex-col border-b py-8 mb-10'>
                    <h6>TAGS</h6>
                    <div className='flex flex-row flex-wrap justify-start tags gap-3'>
                        {tags.data.map((tag, index)=>(
                            <span key={index}>{tag.attributes.name}</span>   
                        ))}
                    </div>
                </div>
            )}
            

            <Link href="/blog/">
                <a>← Back to the blog</a></Link>

        </div>
    )
}

export default SideBar