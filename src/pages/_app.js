import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
useEffect(() => {
	AOS.init({
		delay: 600,
		duration: 800,
	});
});
return <Component {...pageProps} />
}
