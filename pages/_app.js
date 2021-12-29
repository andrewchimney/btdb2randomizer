
import NavBar from '../components/NavBar'
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <SSRProvider>
      <NavBar/> 
      <Component {...pageProps} />
    </SSRProvider>

  )
}

export default MyApp
