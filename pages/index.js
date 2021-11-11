import Head from 'next/head';
import { Categories, PostCard, PostWidget } from '../components';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <>
    <About />
    <div className="container mx-auto px-5 mt-8">
      <Head>
        <title>Rational Optimism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, i) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        {/* <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
    <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
