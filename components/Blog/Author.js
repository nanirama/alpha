
import useSWR from "swr";
import moment from 'moment';
import Image from 'next/image'
import { fetcher } from '../../lib/api'


import DefaultImg from '../../assets/images/author-default.png'

const Author = ({ author, publishedAt }) => {
    const USER_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/authors/${author.data.id}?populate=*`
    const { data: userData, error } = useSWR(USER_ENDPOINT, fetcher);
    console.log('userData', userData)
    const avatarImage = userData && userData.data && userData.data.attributes.avatar && userData.data.attributes.avatar.data && userData.data.attributes.avatar.data.attributes && userData.data.attributes.avatar.data.attributes.url ? userData.data.attributes.avatar.data.attributes.url : DefaultImg
    if (userData && userData.data && userData.data.attributes) {
        return (
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <span className="sr-only">{userData.data.attributes.firstName} {userData.data.attributes.lastName}</span>
                    <Image
                        alt="Image 2"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src={avatarImage}
                    />
                </div>
                <div className="ml-3">                    
                        <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">{userData.data.attributes.firstName} {userData.data.attributes.lastName}</a>
                        </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={moment(publishedAt).format('DD MMM YYYY')}> {moment(publishedAt).format('DD MMM YYYY')} </time>
                    </div>
                </div>
            </div>
        )
    }
}

export default Author