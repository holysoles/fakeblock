// pages/_app.js
import '../styles/app.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}