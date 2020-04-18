/* eslint-disable react/jsx-props-no-spreading */
import Socials from 'components/Socials';
import './_app.scss';
import 'react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
