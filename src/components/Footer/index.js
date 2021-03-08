import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

function FooterContent() {
  return (
    <Footer
      className="footer"
      copyrights="© 2021 Copyright Text Estética"
      links={
        <ul>
          <li>
            <Link to="/">
              <a className="grey-text text-lighten-3">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <a className="grey-text text-lighten-3">Sobre</a>
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <a className="grey-text text-lighten-3">Contato</a>
            </Link>
          </li>
        </ul>
      }
      moreLinks={
      <a 
      className="grey-text text-lighten-4 right"
       to="https://www.linkedin.com/in/rafael-santana-5876a117a/"
       target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin Rafael Santana"
       >
        Developed by Rafael Santana
        </a>}
    >
      <h5 className="white-text">
        Estética
      </h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
  </p>
    </Footer>
  )
};

export default FooterContent;