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
      <div className="hero">
        <h2>Leman Ibrahimli</h2>
        <div>
          <Link href="/test"><a>Ana səhifə</a></Link> <Link href="/test"><a>Haqqimda</a></Link>
        </div>
        <div className="blog">
          <h2><Link href="/test"><a>Lorem ipsum dolor sit amet.</a></Link></h2>
          <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ratione maxime perferendis mollitia fuga dicta asperiores? Dolore sequi doloribus nobis. Voluptates neque aperiam veniam qui expedita aliquid, ut quam cupiditate recusandae tempore sint itaque at! Aliquam temporibus omnis, consectetur corporis eveniet officiis perferendis commodi unde, in velit totam eum facilis dolor. Quod minima doloribus rem temporibus voluptatum suscipit in, molestias porro, itaque consectetur blanditiis? Numquam maiores eum autem pariatur tenetur vel eligendi sapiente ipsam. Adipisci autem vitae expedita repellat dolores reiciendis itaque optio quibusdam quam vero repellendus natus voluptates saepe nobis libero maxime, eum aperiam doloribus eaque. Ipsum ab nulla facere nihil blanditiis tenetur dolor nemo numquam, optio repellat magni a reiciendis repellendus vero distinctio aperiam incidunt laborum libero sit. Illum animi qui ipsam, ex quis aut eos officiis voluptatibus cum quam amet. Quod tenetur laudantium enim itaque aperiam fuga dolorum corporis nihil alias quam quibusdam sit, maiores impedit molestias illum sunt natus nulla dolores eaque magnam quos nostrum dolorem rem. Nam asperiores deserunt ipsum odit amet ad eos ullam consectetur inventore? Quaerat praesentium, voluptatibus nulla velit debitis accusantium, sit ipsum reiciendis facere neque tempore voluptas recusandae ut, molestiae doloribus. Odio ad odit repellat. Quaerat suscipit aliquam dolore pariatur delectus.
          </div>
          <div>blog date</div>
        </div>
      </div>

    </div>
  )
}
