import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="alert alert-block">
                <button type="button btn" className="close" data-dismiss="alert"><p className="btn">CLOSE</p> </button>
                <h4>Dziekuje za wizyte</h4>
                Zobacz moje pozostale projekty na  <a href="https://github.com/Dyzio18">Githubie</a>
            </div>
        </footer>
    );
};

export default Footer;