import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' />
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' />
          <span>QRIGINAL</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' />
          <span>MOVIE</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='https://user-images.githubusercontent.com/66336525/117900748-c07d6980-b27e-11eb-9223-44b739cf1baf.jpg' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      padding: 2px;
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      // &:after == this:after
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0.5);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
