import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <a href="https://www.facebook.com/stanly.cole" target="blank" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="https://twitter.com" target="blank" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/stanislav-iarotchi" target="blank" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="https://twitter.com" target="blank" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="https://stanyaro.slack.com" target="blank" className="slack-ic mr-3">
        <MDBIcon fab icon="slack" />
      </a>
      <a href="https://github.com/siarotchi" target="blank" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
      <a href="mailto:stanyarodev.gmail.com" target="blank" className="email-ic mr-3">
        <MDBIcon icon="envelope" />
      </a>
    </MDBContainer>
  );
};

export default SocialButtonsPage;
