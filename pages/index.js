import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Fourty60 Infotech!" />
        <p className="description">
        <a href="https://www.fourty60.com"> We are a Leading Website Designing and Search Engine Optimization(SEO) providers in Mumbai</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
