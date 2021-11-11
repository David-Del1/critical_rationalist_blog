import React, { useContext, useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, []);

  return (
    <div className={isVisible ? 'Header' : 'transparent'}>
      <div>
        <div>
          <Link href="/">
            <span className="brand">
              The Critical Optimist
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents text-white">
          {categories.map(category => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Header
