import Head from 'next/head'

const posts = [
  {title: "ugh", excerpt: "idek"},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index)=>{
          {post.title}
          {post.excerpt}
        })}
      </div> */}
    </div>
  )
}
