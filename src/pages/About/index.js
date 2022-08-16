import React from "react";
import Box from "../../components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDev,
  faInstagram,
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
// import Slideshow from '../../components/Slideshow';

import "./styles.css";

export default function About() {
  return (
    <>
      <Box color="#e5e5e5" bgColor="#421567" title="Carlos Magno" column>
        <div className="bio-container">
          {/* <img src="./assets/dev2.jpg" alt="dev" id="dev-pic" title="Magno" /> */}
          <div className="bio-text">
            <p id="bio">
              Introvert, Geek, Web Developer, Horde Player and CS Student...
              <br />
              Also known as <span className="italic">Raymag</span>, his hobbies
              are watching animations, learning new stuff, reading useful books
              and running. He also likes to draw stuff on Adobe Illustrator, but
              it's pretty bad at it.
            </p>
            <br />
            <p>prayk11@gmail.com</p>
            <p>prayk11@outlook.com</p>

            <br></br>
            <ul id="footer-links">
              <li>
                <a
                  href="https://github.com/raymag"
                  id="github-icon"
                  target="_blank"
                  title="Github"
                  alt="github"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/raymag"
                  id="dev-icon"
                  target="_blank"
                  title="Dev"
                  alt="dev"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDev} />
                </a>
              </li>
              <li>
                <a
                  href="https://pt.stackoverflow.com/users/83459/carlos-magno"
                  id="stackoverflow-icon"
                  target="_blank"
                  title="StackOverflow"
                  alt="StackOverflow"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carlos-magno-n-10a2a0129/"
                  id="linkedin-icon"
                  target="_blank"
                  title="Linkedin"
                  alt="linkedin"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/blayde88"
                  id="instagram-icon"
                  target="_blank"
                  title="Instagram"
                  alt="instagram"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/C_IMagno"
                  id="twitter-icon"
                  target="_blank"
                  title="Twitter"
                  alt="twitter"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/user/Blayde88"
                  id="reddit-icon"
                  target="_blank"
                  title="Reddit"
                  alt="reddit"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faReddit} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Box>
      {/* <Box title="Gallery">
            <Slideshow
                interval={3000}
                images={[
                    './assets/slideshow/img_1.png',
                    './assets/slideshow/img_2.png',
                    './assets/slideshow/img_3.jpg',
                    './assets/slideshow/img_4.jpg',
                    './assets/slideshow/img_5.jpg',
                    './assets/slideshow/img_6.jpg',
                    './assets/slideshow/img_7.jpg',
                    './assets/slideshow/img_8.jpg',
                    './assets/slideshow/img_9.jpg',
                    './assets/slideshow/img_10.jpg',
                    './assets/slideshow/img_11.jpg',
                    './assets/slideshow/img_12.jpg',
                    './assets/slideshow/img_13.jpg',
                    './assets/slideshow/img_14.png',
                    './assets/slideshow/img_15.png',
                    './assets/slideshow/img_16.jpg',
                    './assets/slideshow/img_17.jpg',
                ]}
            />
        </Box> */}
    </>
  );
}
