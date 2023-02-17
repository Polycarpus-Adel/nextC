import '@/styles/globals.css'
import Layout from '@/component/Layout'

export default function App({ Component, pageProps }) {

  return(
   <>
   Global
   <Layout>
      <Component {...pageProps} />
   </Layout>
   </>
    
  )
}
