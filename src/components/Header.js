import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
               
              <div className="navbar-brand">
                    <img src="img/logo.png" alt="logo" />
                    <div className="tagline">React Album List - react, redux, redux-promise, redux-form</div>
                </div>
            </div>
          </div>
        </nav>
    )
}

export default Header;