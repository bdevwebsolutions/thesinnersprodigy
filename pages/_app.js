import '../styles/globals.css'
import 'react-slideshow-image/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemsProvider from '../context/itemsContext';
import CartProvider from '../context/cartContext';

//COMPONENTS
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

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
        <Component {...pageProps} />
      </ItemsProvider>
    </CartProvider>
  )
}

export default MyApp
