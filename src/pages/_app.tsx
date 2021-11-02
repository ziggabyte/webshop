import { AppProps } from 'next/app';
import { CartProvider } from 'react-use-cart';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    //ta bort serverside injected CSS
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <CartProvider>
            <Component { ...pageProps } />
        </CartProvider>
    );
}

export default MyApp;
