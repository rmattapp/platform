import Head from "next/head";

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

// own css files here
//import "../css/customcss.css";

function ComTech({ Component, pageProps }) {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        </>
    );
}
export default ComTech;