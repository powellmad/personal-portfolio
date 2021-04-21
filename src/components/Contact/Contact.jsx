import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Tech Stack" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || ''}</p>
            {/* <div>
              <img src="../html-css-js.png" />
            </div>
            <div>
              <img src="react-logo.png" />
            </div>
            <div>
              <img src="jsx.png" />
            </div> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
