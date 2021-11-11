import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="postCard shadow-xl rounded-sm p-4 text-white lg:p-6 pb-4 mb-8 cursor-pointer" >
        <div className="relative overflow-hidden pb-80 mb-6">
          <img src={post.featuredImage?.url} alt={post.title}
            className="object-top absolute h-100 w-full object-cover shadow-lg lg:rounded-sm"
          />
        </div>
        <h1 
          className="transition duration-400 text-center mb-6 cursor-pointer text-2xl font-semibold"
        >
            {post.title}
          
        </h1>
        <div className="block lg:flex mb-6 w-full">
          <div className="font-medium text-white">
            <span>
              {moment(post.createdAt).format('MMM DD YYYY')}
            </span>
          </div>
        </div>
        <p className="text-md text-white font-normal px-0 mb-6">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-400 transform hover:-translate-y-1 hover:bg-blue-600 inline-block bg-blue-500 active:bg-blue-700 cursor-pointer p-2 rounded-sm text-white">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
