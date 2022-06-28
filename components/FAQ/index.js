import { Disclosure } from '@headlessui/react'
import ReactMarkdown from "react-markdown"
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Sidebar from './sidebar'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FaqIndex({data}) {   
    const [catIndex, setCatIndex] = useState('all'); 
    const [faqData, setFaqData] = useState(data.faq); 
    useEffect(() => {
        
    }, [catIndex, faqData]);
    const catChangeHandler = (value)=>{
        setCatIndex(value)
        if(value==='all'){
            setFaqData(data.faq)   
        }
        else
        {            
            const fData = data.faq.filter((item)=>{
                return item.attributes.faq_categories && item.attributes.faq_categories.data.find((cat)=>{
                    return cat.attributes.slug===value
                })
            })
            setFaqData(fData)
        }        
    }
    
    return (
        <div className="mx-auto max-w-7xl px-4 lg:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center'>
                {/* <Sidebar data={data.categories} catChangeHandler={catChangeHandler} catIndex={catIndex} /> */}
                <div className="md:col-span-3 col-span-1 mt-10 md:mt-0">
                    <div className="">
                        <div className="mx-auto px-4 pb-20 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mx-auto divide-gray-200">
                                <h2 className="text-left mb-10 text-3xl font-extrabold text-gray-900 sm:text-3xl">Frequently asked questions</h2>
                                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                    {faqData && faqData.map((item,index)=>{
                                        return(
                                            <Disclosure as="div" key={index} className="pt-6">
                                                {({ open }) => (
                                                    <>
                                                        <dt className="text-lg">
                                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                                <span className="font-medium text-gray-900">{item.attributes.title}</span>
                                                                <span className="ml-6 h-7 flex items-center">
                                                                    <ChevronDownIcon
                                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Disclosure.Button>
                                                        </dt>
                                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                            <ReactMarkdown className="text-base text-gray-500">{item.attributes.description}</ReactMarkdown>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )                                       
                                    })}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}