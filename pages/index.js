




import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import fetch from 'isomorphic-unfetch'
export default function Home(posts) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="hero">
          <h2>Leman Ibrahimli</h2>
          <div>
            <Link href="/test"><a>Ana səhifə</a></Link> <Link href="/test"><a>Haqqimda</a></Link>
          </div>
        </div>
        {posts.map(post=>(
        <div className="blog">
          <h2><Link href="/test"><a>{post.title}</a></Link></h2>
          <div>
            {post.details}
          </div>
          <div className="blog-date">blog date</div>
        </div>
))}
      </div>
      <style jsx>
        {`
  .container{
    max-width:650px;
    width:100%;
    margin:0 auto;
  }
  .hero{
    text-align:center;
  }
  .blog-date{
    float:right;
    color:#cccccc;
    margin:12px 0 48px 0;
  }
  `}
      </style>
    </div>
  );}
  Home.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/post')
    const json = await res.json();
    return { posts: json.posts };
  }
  
  export default Home
  


