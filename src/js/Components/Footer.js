import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="content-wrapper">
          <div className="content">
            <div className="section">
              <h4>Contact us</h4>
              <div className="contact-info">
                <h6 className="contact-name">Alfonz Montelibano</h6>
                <div className="contact-detail">
                  <i className="mdi mdi-email-outline"></i>
                  m.alfonz@gmail.com
                </div>
                <a
                  className="contact-detail"
                  href="http://alfonzm.github.io"
                  target="*">
                    <i className="mdi mdi-earth"></i>
                    alfonzm.github.io
                </a>
              </div>
              <div className="contact-info">
                <h6 className="contact-name">Davy Jones Bolivar</h6>
                <div className="contact-detail">
                  <i className="mdi mdi-email-outline"></i>
                  davy.bolivar@gmail.com
                </div>
                <a
                  className="contact-detail"
                  href="http://davybolivar.github.io"
                  target="*">
                    <i className="mdi mdi-earth"></i>
                    davybolivar.github.io
                </a>
              </div>
            </div>
            <div className="section">
              <h4>Check us out on</h4>
              <div>
                <a
                  className="facebook-icon footer-icon mdi mdi-facebook"
                  href="https://www.facebook.com/Supernaught-667388713322929/"
                  target="*">
                </a>
                <a
                  className="twitter-icon footer-icon mdi mdi-twitter"
                  href="https://twitter.com/_supernaught"
                  target="*">
                </a>
                <a
                  className="github-icon footer-icon mdi mdi-github-circle"
                  href="https://github.com/Supernaught"
                  target="*">
                </a>
              </div>
              <span className="copyright-info">
                Copyright © 2016 Supernaught Games<br/>
                Cebu City 6000, Cebu Philippines
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
