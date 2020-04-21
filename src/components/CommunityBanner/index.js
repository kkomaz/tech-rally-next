import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import useResponsiveLayout from 'utils/responsive/useResponsiveLayout';
import { Button } from 'reactstrap';
import Socials from 'components/Socials';

function CommunityBanner () {
  const { isMdLayout } = useResponsiveLayout();

  return (
    <>
      <div className="facebook-group">
        <img
          className="logo mb-one"
          src="https://tech-rally-test-bucket.s3.us-east-2.amazonaws.com/Profile_Picture.png"
          alt="logo"
          height="75"
          width="75"
        />
        <p>Looking to join a community of aspiring developers?</p>
        <p>Regardless of what level</p>
        <p className="facebook-group-text-detail">
          The TechRally Software Dev Lounge is the perfect place to ask questions and
          collaborate.
        </p>
      </div>
      <Button
        style={{ width: '100%' }}
        size="lg"
        color="primary"
        onClick={() => window.open('https://www.facebook.com/groups/811715242683243')}
      >
        Join Now!
        <FaFacebook className="ml-quarter mb-quarter" />
      </Button>

      <hr className="divider" />

      {isMdLayout && <Socials hideFb size="3.5em" />}
      <style jsx>
        {`
          .facebook-group-text-detail {
            line-height: 2em;
          }
          .facebook-group {
            text-align: center;
          }
          .logo {
            border-radius: 100%;
          }
        `}
      </style>
    </>
  );
}

export default CommunityBanner;
