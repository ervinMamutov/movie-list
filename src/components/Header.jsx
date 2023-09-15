import PropTypes from 'prop-types';
import './Header.css';
import data from '../data/data.js';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container logo">
          <div className="logo__container">
            <img src={data.header.srs} alt="logo" className="logo-image" />
            <h1 className="logo-text">{data.header.title}</h1>
          </div>
          <nav className="menu__container menu">
            <ul className="menu-nav">
              {data.menu.map((item, index) => (
                <li key={index} className="menu-item">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <div className="user__container user">
            <div className="user-sign">{data.user}</div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
