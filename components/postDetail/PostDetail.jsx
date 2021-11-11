import moment from 'moment'
import React from 'react'

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if(obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }
      if(obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }

    }

  switch (type) {
    case 'heading-three':
      return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
    case 'paragraph':
      return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
    case 'heading-four':
      return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
    case 'image':
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
    }
  };

  return (
    <>
      <div 
        className="image shadow-sm mb-8"
        style={{
          backgroundImage: `url(${post.featuredImage.url})`,
          height: "60vh",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
      >
        {/* <img src={post.featuredImage.url} alt={post.title} width="70%" className="mt-40 object-top rounded-sm mx-auto" /> */}
      </div>
      <div className="px-10 PostDetail relative text-white shadow-0 rounded-sm">
        <div>
          <h1 className="mb-4 text-2xl font-semibold">{post.title}</h1>
          <div className="mb-6 font-medium text-gray-300">
            <span>
              {moment(post.createdAt).format('MMM DD YYYY')}
            </span>
          </div>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>   getContentFragment(itemIndex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type)
          } )}
          
        </div>
      </div>
    </>
  )
}

export default PostDetail
