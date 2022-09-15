import '../styles/globals.css' //css global
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics'

function MyApp({ Component, pageProps }) {
  
  //evento pra adicionar view no analytics
  const router = useRouter()

  useEffect(() => {

    const handleRouteChange = url => { gtag.pageview(url) }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => { router.events.off('routeChangeComplete', handleRouteChange) }

  }, [router.events])
  //fim do evento

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp