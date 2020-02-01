import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

export default function Footer(){
    return (
        <footer id="footer">
        <span>Magno<span className="highlight">DEV</span> | 2020</span>
        <ul id="footer-links">
            <li>
                <a
                href="https://github.com/raymag"
                id="github-icon"
                target="_blank"
                title="Github"
                alt="github"
                rel="noopener noreferrer"
                ><FontAwesomeIcon icon={faGithub} />
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
                ><FontAwesomeIcon icon={faInstagram} /></a>    
            </li>
            <li>
                <a
                href="https://twitter.com/C_IMagno"
                id="twitter-icon"
                target="_blank"
                title="Twitter"
                alt="twitter"
                rel="noopener noreferrer"
                ><FontAwesomeIcon icon={faTwitter} /></a>    
            </li>
            <li>
                <a
                href="https://dev.to/raymag"
                id="dev-icon"
                target="_blank"
                title="Dev"
                alt="dev"
                rel="noopener noreferrer"
                ><FontAwesomeIcon icon={faDev} /></a>
            </li>
        </ul>
      </footer>
    );
}