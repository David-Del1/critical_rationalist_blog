import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);
  
  return (
    <div className="Categories text-white shadow-sm rounded-md p-6 mb-6 pb-10">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
