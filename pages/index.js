import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
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
        <div className="blog">
          <h2><Link href="/test"><a>Lorem ipsum dolor sit amet.</a></Link></h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione maxime perferendis mollitia
            fuga dicta asperiores? Dolore sequi doloribus nobis. Voluptates neque aperiam veniam qui expedita aliquid,
            ut quam cupiditate recusandae tempore sint itaque at! Aliquam temporibus omnis, consectetur corporis eveniet
            officiis perferendis commodi unde, in velit totam eum facilis dolor. Quod minima doloribus rem temporibus
            voluptatum suscipit in, molestias porro, itaque consectetur blanditiis? Numquam maiores eum autem pariatur
            tenetur vel eligendi sapiente ipsam. Adipisci autem vitae expedita repellat dolores reiciendis itaque optio
            quibusdam quam vero repellendus natus voluptates saepe nobis libero maxime, eum aperiam doloribus eaque. Ipsum
            ab nulla facere nihil blanditiis tenetur dolor nemo numquam, optio repellat magni a reiciendis repellendus vero
            distinctio aperiam incidunt laborum libero sit. Illum animi qui ipsam, ex quis aut eos officiis voluptatibus cum quam amet.
          </div>
          <div className="blog-date">blog date</div>
        </div>

        <div className="blog">
          <h2><Link href="/test"><a>Lorem ipsum dolor sit amet.</a></Link></h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione maxime perferendis mollitia
            fuga dicta asperiores? Dolore sequi doloribus nobis. Voluptates neque aperiam veniam qui expedita aliquid,
            ut quam cupiditate recusandae tempore sint itaque at! Aliquam temporibus omnis, consectetur corporis eveniet
            officiis perferendis commodi unde, in velit totam eum facilis dolor. Quod minima doloribus rem temporibus
            voluptatum suscipit in, molestias porro, itaque consectetur blanditiis? Numquam maiores eum autem pariatur
            tenetur vel eligendi sapiente ipsam. Adipisci autem vitae expedita repellat dolores reiciendis itaque optio
            quibusdam quam vero repellendus natus voluptates saepe nobis libero maxime, eum aperiam doloribus eaque. Ipsum
            ab nulla facere nihil blanditiis tenetur dolor nemo numquam, optio repellat magni a reiciendis repellendus vero
            distinctio aperiam incidunt laborum libero sit. Illum animi qui ipsam, ex quis aut eos officiis voluptatibus cum quam amet.
          </div>
          <div className="blog-date">blog date</div>
        </div>

        <div className="blog">
          <h2><Link href="/test"><a>Lorem ipsum dolor sit amet.</a></Link></h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione maxime perferendis mollitia
            fuga dicta asperiores? Dolore sequi doloribus nobis. Voluptates neque aperiam veniam qui expedita aliquid,
            ut quam cupiditate recusandae tempore sint itaque at! Aliquam temporibus omnis, consectetur corporis eveniet
            officiis perferendis commodi unde, in velit totam eum facilis dolor. Quod minima doloribus rem temporibus
            voluptatum suscipit in, molestias porro, itaque consectetur blanditiis? Numquam maiores eum autem pariatur
            tenetur vel eligendi sapiente ipsam. Adipisci autem vitae expedita repellat dolores reiciendis itaque optio
            quibusdam quam vero repellendus natus voluptates saepe nobis libero maxime, eum aperiam doloribus eaque. Ipsum
            ab nulla facere nihil blanditiis tenetur dolor nemo numquam, optio repellat magni a reiciendis repellendus vero
            distinctio aperiam incidunt laborum libero sit. Illum animi qui ipsam, ex quis aut eos officiis voluptatibus cum quam amet.
          </div>
          <div className="blog-date">blog date</div>
        </div>

        <div className="blog">
          <h2><Link href="/test"><a>Lorem ipsum dolor sit amet.</a></Link></h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione maxime perferendis mollitia
            fuga dicta asperiores? Dolore sequi doloribus nobis. Voluptates neque aperiam veniam qui expedita aliquid,
            ut quam cupiditate recusandae tempore sint itaque at! Aliquam temporibus omnis, consectetur corporis eveniet
            officiis perferendis commodi unde, in velit totam eum facilis dolor. Quod minima doloribus rem temporibus
            voluptatum suscipit in, molestias porro, itaque consectetur blanditiis? Numquam maiores eum autem pariatur
            tenetur vel eligendi sapiente ipsam. Adipisci autem vitae expedita repellat dolores reiciendis itaque optio
            quibusdam quam vero repellendus natus voluptates saepe nobis libero maxime, eum aperiam doloribus eaque. Ipsum
            ab nulla facere nihil blanditiis tenetur dolor nemo numquam, optio repellat magni a reiciendis repellendus vero
            distinctio aperiam incidunt laborum libero sit. Illum animi qui ipsam, ex quis aut eos officiis voluptatibus cum quam amet.
          </div>
          <div className="blog-date">blog date</div>
        </div>

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
  )
}







