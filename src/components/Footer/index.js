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
      copyrights="© 2021 Copyright Estética Rhoades"
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
       href="https://github.com/rafalmeida73/estetica"
       target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin Rafael Santana"
       >
        Repositório no GitHub
        </a>}
    >
      <h5 className="white-text">
        Estética Rhoades
      </h5>
    </Footer>
  )
};

export default FooterContent;