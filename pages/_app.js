import '../styles/globals.css'
import 'react-slideshow-image/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemsProvider from '../context/itemsContext';
import CartProvider from '../context/cartContext';

//COMPONENTS
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

//MARQUUE
import {Marq} from '../components/marque';
import BottomBar from '../components/bottom';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ItemsProvider>
        <Marq/>
        <Component {...pageProps} />
        <BottomBar/>
      </ItemsProvider>
    </CartProvider>
  )
}

export default MyApp
