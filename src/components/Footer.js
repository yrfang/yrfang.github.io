import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/yrfang"
        target="_blank"
        rel="noreferrer"
      >
        <span className="footer-icon">
          <FaGithubSquare />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/yingru-fang/" target="_blank"
        rel="noreferrer"
      >
        <span className="footer-icon">
          <FaLinkedin />
        </span>
      </a>
    </footer>
  );
};

export default Footer;