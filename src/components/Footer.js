import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




class Footer extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    return (
      <FooterContainer>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">Apartment for Rent</Link>
            </li>
            <li>
              <Link to="/">Apartment Low to hide</Link>
            </li>
            <li>
              <Link to="/">Offices for Buy</Link>
            </li>
            <li>
              <Link to="/">Offices for Rent</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/"> Los Angeles Offices</Link>
            </li>
            <li>
              <Link to="/"> Las Vegas Apartments</Link>
            </li>
            <li>
              <Link to="/"> Sacramento Townhome</Link>
            </li>
            <li>
              <Link to="/"> San Francisco Offices</Link>
            </li>
          </ul>
       
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notices</Link>
            </li>
          </ul>
        </div>
        {/* Toggle Language Content */}

        <br />
      </FooterContainer>
    );
  }
}

export default Footer;




// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--darkGrey);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: var(--darkblack);
  }



  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }

  // Toggle Language Content
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
