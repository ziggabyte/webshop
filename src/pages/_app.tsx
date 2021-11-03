import { AppProps } from 'next/app';
import { CartProvider } from 'react-use-cart';
import PageLayout from '../components/PageLayout';
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
            <PageLayout>
                <Component { ...pageProps } />
            </PageLayout>
        </CartProvider>
    );
}

export default MyApp;
