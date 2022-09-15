import Head from 'next/head'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="lang" content="pt-BR" />

      </Head>

      <main>
        {children}
      </main>

      <footer >

        <h3 className="">rodapé nextjs</h3>

      </footer>

    </>
  )
}
