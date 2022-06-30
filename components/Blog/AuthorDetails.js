import Image from 'next/image'
import useSWR, { useSWRPages } from "swr";
import { fetcher } from '../../lib/api'

import DefaultImg from '../../assets/images/author-default.png'

const AuthorDetails = ({ author }) => {
    const USER_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/authors/${author}?populate=*`
    const { data: userData, error } = useSWR(USER_ENDPOINT, fetcher);
    if (error) <p>Loading failed...</p>;
    if (!userData) <p>Loading ...</p>;
    console.log('userData', userData)
    const avatarImage = userData && userData.data && userData.data.attributes.avatar && userData.data.attributes.avatar.data && userData.data.attributes.avatar.data.attributes && userData.data.attributes.avatar.data.attributes.url ? userData.data.attributes.avatar.data.attributes.url : DefaultImg
    console.log('userData', avatarImage)
    return (
        <div className='flex flex-row gap-5 border-b border-t my-10 py-8'>
            <Image
                alt="Image 2"
                width={40}
                height={40}
                className="h-15 w-15 rounded-full"
                src={avatarImage}
            />
            {userData && userData.data && userData.data.attributes && userData.data.attributes.firstName && (
                <div className='flex flex-col author_txt'>
                    <p>{userData.data.attributes.firstName} {userData.data.attributes.lastName}</p>
                    <p><a href='#'>@Twitter</a></p>
                </div>
            )}            
        </div>
    )
}

export default AuthorDetails