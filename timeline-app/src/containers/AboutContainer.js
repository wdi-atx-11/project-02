import React, {Component} from 'react'
import '../About.css';

class AboutContainer extends Component {
  render() {
    return (
      <div className="containter">
          <section>
            <div className="purple">
              <div className="all">
                <h3 className="mission">Our Mission</h3>
                <div className="touch">
                  <p className="mword">-To give everyone the power to create and share events instantly.-</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="about">
              <h3 className="statement">About</h3>
              <p className="stuff">Welcome to TimeShare! Created in 2017 by four bright young students from General Assembly, our philosphy was to create a product with the user in mind. Our features enable you to share your passions and favorite experiences with other users from around the world. </p>
            </div>
          </section>

          <section>
            <div className="tech">
              <h3 className="mission">Technologies Used</h3>
              <ul className="lang">HTML</ul>
              <ul className="lang">CSS</ul>
              <ul className="lang">Javascript</ul>
              <ul className="lang">Jquery</ul>
              <ul className="lang">React</ul>
              <ul className="lang">Bootstrap</ul>
              <ul className="lang">Materialze</ul>
            </div>
          </section>

          <div className="us">
            <div className="row">
              <div className="circle">

                <p className="team">Team</p>
                  <div className="col-lg-3">
                    <div className="hover">
                      <img className="img-circle" img src="images/kenny.jpg" alt="Avatar"/>
                      <div className="overlay">
                        <div className="kenny">Kenny Vo<br/>Back-End</div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-3">
                    <div className="hover">
                      <img className="img-circle" img src="images/james.jpg" alt="Avatar"/>
                      <div className="overlay">
                        <div className="kenny">James<br/> Summers<br/>Back-End</div>
                      </div>
                    </div>
                  </div>

                <div className="col-lg-3">
                  <div className="hover">
                    <img className="img-circle" img src="images/viv.jpg" alt="Avatar"/>
                    <div className="overlay">
                      <div className="kenny">Vivienne<br/> White<br/>Front-End</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="hover">
                    <img className="img-circle" img src="images/dj.jpg" alt="Avatar"/>
                    <div className="overlay">
                      <div className="kenny">DJ<br/>Benavidez<br/>Front-End</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <p className="theresmore">But don't just take our word for it..</p>

          <section>
            <div className="butwait">
              <img className="img-circle" img src="images/derek.jpg" alt="Avatar"/>
              <h3 className="db"> "Time Share is the best website I've ever used!" - Derek B.</h3>
              <img className="img-circle" img src="images/benjamin.jpg" alt="Avatar"/>
              <h3 className="db"> "Time Share changed my life forever!!" - Benjamin T.</h3>
              <img className="img-circle" img src="images/Dane.jpg" alt="Avatar"/>
              <h3 className="db">"Hello, this is Dane" - Dane</h3>
            </div>
          </section>
          <section>
            <div className="move">
              <h3 className="headquarters">Headquarters</h3>
              <div className="hq">
                <div className="letters">
                  <ul className="styling">We Work</ul>
                  <ul className="styling">600 Congress Av</ul>
                  <ul className="styling">Austin, TX 78701<br/> USA</ul>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default AboutContainer
