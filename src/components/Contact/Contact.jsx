import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import TechStackImg from '../Image/TechStackImg';
import Title from '../Title/Title';

const Contact = () => {
  const { tech } = useContext(PortfolioContext);

  return (
    <section id="contact">
      <Container>
        <Title title="Tech Stack" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="about-wrapper__images">
              {tech.map((logo) => {
                const { title, img } = logo;

                return <TechStackImg alt={title} filename={img} />;
              })}
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
