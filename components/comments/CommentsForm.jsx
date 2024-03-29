import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name, email, comment, slug
    }

    if(storeDataEl) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000)
      })
  }

  return (
    <div className="bg-white shadow-sm rounded-sm p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Submit a comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
          ref={commentEl} 
          className="p-4 outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-800"
          placeholder="Write a comment..."
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-800"
          placeholder="Your name"
          name="comment"
        />
        <input 
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-300 bg-gray-100 text-gray-800"
          placeholder="Your email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" ref={storeDataEl} id="storeData" name="storeData" value={true} />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save my info for future comments</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      <div className="mt-8">
        <button 
          type="button" 
          className="transition duration-400 ease hover:bg-blue-600 inline-block bg-blue-500 active:bg-blue-700 text-lg p-2 rounded-sm text-white cursor-pointer" 
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-lg float-right font-semibold mt-3 text-green-500">Comment submitted for review.</span>}
      </div>
    </div>
  )
}

export default CommentsForm
