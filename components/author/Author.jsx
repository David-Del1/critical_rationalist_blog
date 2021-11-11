import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="mt-20 mb-8 p-12 relative rounded-lg bg-white shadow-sm">
      <div className="absolute left-0 right-0 -top-14">
        <Image 
          src={author.photo.url} 
          alt={author.name}
          height="100px"
          width="100px"
          unoptimized
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="mt-4 my-4 text-xl font-semibold">{author.name}</h3>
      <p className="text-lg">{author.bio}</p>
    </div>
  )
}

export default Author;
