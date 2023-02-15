import './footer.scss';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import {FaCookieBite} from 'react-icons/fa';


export default function Footer() {
  return (
    <div id='footer'>
        <div className="footer-left">
            <h3>Beaches</h3>
                <ul className="list-left">
                    <a href="/"><li>About</li></a>
                    <a href="/"><li>Partnership</li></a>
                    <a href="/"><li>Careers</li></a>
                    <a href="/"><li>Newsroom</li></a>
                    <a href="/"><li>Advertising</li></a>
                </ul>
        </div>
        <div className="footer-right">
            <div className="social-networks">
                <FaFacebookF className="icon" />
                <AiFillInstagram className="icon" />
                <FaLinkedinIn className="icon" />
                <GrMail className="icon" />
                <FaCookieBite className="icon" />
            </div>
            <ul className='list-right'>
                <a href="/"><li>Contact</li></a>
                <a href="/"><li>Terms</li></a>
                <a href="/"><li>Privacy</li></a>
                <a href="/"><li>Newsroom</li></a>
                <a href="/"><li>Contract</li></a>
                <a href="/"><li>Cookies</li></a>
            </ul>
        </div>
    </div>
  )
}
