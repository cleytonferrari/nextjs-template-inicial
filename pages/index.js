import Head from 'next/head'
import MenuHeader from '../components/MenuHeader'

export const getStaticProps = async () => {
  const dataHome = {}
  const dataCategoria = {};

  return {
    props: {
      home: dataHome,
      categorias: dataCategoria
    },
    revalidate: 30
  }

}

export default function Home({ home, categorias }) {
  return (
    <>
      <Head>
        <title>NextJS</title>
        <meta property="og:description" content="Site oficial..." />
      </Head>
      
      <MenuHeader />

      <div className="">
        <h1>Página Inicial</h1>
      </div>

    </>
  )
}
