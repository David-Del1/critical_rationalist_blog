import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then(res => setRelatedPosts(res))
    } else {
      getRecentPosts()
        .then(res => setRelatedPosts(res))
    }
  }, [slug])
  return (
    <div className="PostWidget text-white shadow-sm rounded-md p-6 mb-6">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4">
        {slug? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map(post => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url} alt="" height="60px" width="60px" className="align-middle rounded-sm" />
          </div>
          <div className="flex-grow ml-4">
          <Link href={`/post/${post.slug}`} key={post.title} className="">
              {post.title}
            </Link>
            <p className="text-gray-400 font-xs">
              {moment(post.createdAt).format('MMM DD YYYY')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
