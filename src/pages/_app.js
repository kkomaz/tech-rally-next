/* eslint-disable react/jsx-props-no-spreading */
import Socials from 'components/Socials';
import { DefaultSeo } from 'next-seo';
import './_app.scss';
import 'react-quill/dist/quill.snow.css';
import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="main-container">
        <div className="body">
          <Component {...pageProps} />
        </div>
        <div className="footer">
          <Socials color="#FFFAFA" />
          <h5
            className="mt-one copy-right"
          >
            TechRally ©2020
          </h5>
        </div>
      </div>
    </>
  );
}

export default MyApp;
