import "../styles/globals.css";
import "react-slideshow-image/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/media/media.css";
import React from "react";
import ItemsProvider from "../context/itemsContext";
import CartProvider from "../context/cartContext";
import Head from "next/head";

//COMPONENTS
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

import BottomBar from "../components/bottom";

NProgress.configure({
	minimum: 0.3,
	easing: "ease",
	speed: 800,
	showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
	React.useEffect(() => {
		window.location.replace("https://the-sinners-prodigy.myshopify.com/");
	}, []);

	return (
		<>
			<Head>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<meta
					name='facebook-domain-verification'
					content='2bs2dwm5ldg9wveypmriguwayczuo5'
				/>
				<meta
					name='facebook-domain-verification'
					content='mi48dok2qu128br1525yx5shsbxd23'
				/>
			</Head>
			<CartProvider>
				<ItemsProvider>
					<Component {...pageProps} />
					<BottomBar />
				</ItemsProvider>
			</CartProvider>
		</>
	);
}

export default MyApp;
