import Head from 'next/head'
import Image from 'next/image'

import BlogAvatar from "../../assets/images/blog-avatar.png"
import BlogImg from "../../assets/images/blog_img.jpg"

import Layout from '../../components/layout'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'


export default function BlogSingle() {
    return (
        <Layout>
            <div className='w-100 blog-content'>
                <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <h6 className='text-center'>Sunday, May 2, 2021</h6>
                    <h1 className='text-center'>Introducing Multi-part Posts with Nested Routing</h1>
                    <div className="border-t border-gray-300 mt-8 md:grid md:grid-cols-3 grid-cols-1 xl:gap-20 gap-10 w-100 py-16 relative">
                        <div className='col-span-1'>
                            <div className='sticky top-4 w-full blog_sidebar'>
                                <h6>Table of contents</h6>
                                <ul className='mt-4'>
                                    <li><a href='#'>introduction</a></li>
                                    <li><a href='#'>software and tools</a></li>
                                    <li><a href='#'>other resources</a></li>

                                    <ol>
                                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                                    </ol>
                                    <li><a href='#'>conclusion</a></li>
                                </ul>
                                <div className='flex flex-row gap-5 border-b border-t mt-10 py-8'>
                                    <Image className="rounded-full w-16 h-16" src={BlogAvatar} alt="" />
                                    <div className='flex flex-col author_txt'>
                                        <p>Tails Azimuth</p>
                                        <p><a href='#'>@Twitter</a></p>
                                    </div>
                                </div>
                                <div className='flex flex-col border-b py-8 mb-10'>
                                    <h6>TAGS</h6>
                                    <div className='flex flex-row gap-3 tags'>
                                        <a href='#'>MULTI-AUTHOR</a>
                                        <a href='#'>NEXT-JS </a>
                                        <a href='#'>FEATURE</a>
                                    </div>
                                </div>

                                <a href='#'>← Back to the blog</a>

                            </div>
                        </div>
                        <div className='col-span-2'>
                            <h2>Introduction</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <h3>Software and tools</h3>
                            <p>Ipsum sit mattis nulla quam nulla. Gravida <a href='#'> Software and tools</a> id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                            <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                            <h4>Other resources</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <ul>
                                <li>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum eg</li>
                                <li>Quis lobortis at sit dictum eget nibh tortor commodo</li>
                                <li> aliquet erat dolor enim. Ornare id morbi eget</li>
                            </ul>
                            <h4>Other resources</h4>
                            <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
                            <ol>
                                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                            </ol>
                            <div className='mb-4'>
                            <Image src={BlogImg} alt="" width={600} height={400} />
                            </div>
                            <p>Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.</p>
                            <p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
                            <h4>Conclusion</h4>
                            <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                            <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                            <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                        </div>
                    </div>
                    <div className='pagination'>

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

                    </div>
                </div>
            </div>
        </Layout>
    )
}
