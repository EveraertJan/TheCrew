import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="row first-xs between-sm">
              <div className="col-xs-5 col-sm-4">
                <h3 className="name">
                  <a href="/">Thecrew.cc</a>
                </h3>{" "}
              </div>
              <div className="col-xs-7 col-sm-4 navigation">
                <ul className="pages"></ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <small className="social">
                  <a href="https://twitter.com/thecrew_cc">
                    <span className="icon icon--twitter">
                      <svg viewBox="0 0 512 512">
                        <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                      </svg>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/thecrew_cc/">
                    <span className="icon icon--instagram">
                      <svg viewBox="0 0 512 512">
                        <g>
                          <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                          <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                          <circle cx="351.5" cy="160.5" r="21.5" />
                        </g>
                      </svg>
                    </span>
                  </a>
                  <a href="mailto:info@thecrew.cc">
                    <span className="icon icon--mail">
                      <svg viewBox="0 0 512 512">
                        <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" />
                      </svg>
                    </span>
                  </a>
                </small>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <main className="content">
            <div className="posts">
              <div className="project-section">
                <p>
                  This is a project that just started up. Thecrew.cc will try to
                  create art in all kind of forms, focussed on collaboration.
                  Wether it is artists working together, or multiple persons
                  involved in the creation.
                </p>
                <p>
                  The First idea, for example, is the create a work based on an
                  interview with one of the officers present at the 2019 Royal
                  Rebellion protests. The outcome would be a combination of
                  writing, photography, and possibly alternatives to these.
                </p>
                <p>
                  If we can get people to connect, in whatever way, our target
                  is reached. Wether they change opinions in the meanwhile, is
                  not up to us.
                </p>
                <p>
                  This website will be used to provide further information when
                  available, and to provide a home for the concept
                </p>
              </div>
            </div>
          </main>
          <footer id="footer">
            <div className="row">
              <div className="col-xs-12 col-sm-7 footer">
                {" "}
                <a href="/noprivacy/">No Privacy Policy</a> | &copy; Thecrew.cc{" "}
                | Hosted and done
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
