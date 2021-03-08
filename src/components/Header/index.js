import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <Navbar
        alignLinks="right"
        brand={
          <Link className="brand-logo" to="/">
            <img
              src={logo}
              alt="Estética"
              width={200}
              height={60}
            />
          </Link>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <Link to="/">
          Home
        </Link>
        <Link to="/sobre">
          Sobre
        </Link>
        <Link to="/contato">
          Contato
        </Link>
      </Navbar>
    </header>
  )
};

export default Header;